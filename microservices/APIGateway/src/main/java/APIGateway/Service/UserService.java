package APIGateway.Service;

import APIGateway.Configuration.AuthenticationManager;
import APIGateway.Core.DataTypeObjects.AuthenticationRequest;
import APIGateway.Core.DataTypeObjects.AuthenticationResponse;
import APIGateway.Core.DataTypeObjects.RegisterRequest;
import APIGateway.Model.TokenEntity;
import APIGateway.Model.UserEntity;
import APIGateway.Repository.TokenRepository;
import APIGateway.Repository.UserRepository;
import APIGateway.Core.Enums.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public Mono<Object> register(RegisterRequest registerRequest) {
        return userRepository.findByEmail(registerRequest.getEmail())
                .flatMap(foundUser -> Mono.error(new RuntimeException("User already exists")))
                .switchIfEmpty(Mono.defer(() -> {
                    var newUser = UserEntity.builder()
                            .username(registerRequest.getUsername())
                            .password(passwordEncoder.encode(registerRequest.getPassword()))
                            .role(Role.USER)
                            .email(registerRequest.getEmail())
                            .build();
                    return userRepository.save(newUser)
                            .flatMap(this::getAuthenticationResponseMono);
                }));
    }

    private Mono<AuthenticationResponse> getAuthenticationResponseMono(UserDetails savedUser) {
        var accessToken = jwtService.generateToken(savedUser);
        var refreshToken = jwtService.generateRefreshToken(savedUser);
        var newToken = TokenEntity.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .email(savedUser.getUsername())
                .issued_time(new Date())
                .build();
        return tokenRepository.save(newToken)
                .then(Mono.just(AuthenticationResponse.builder()
                        .access(accessToken)
                        .refresh(refreshToken)
                                .message("Success")
                        .build()));
    }

    public Mono<AuthenticationResponse> login(AuthenticationRequest authenticationRequest) {
        return userRepository.findByEmail(authenticationRequest.getEmail())
                .flatMap(foundUser-> {
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(foundUser.getUsername(), foundUser.getPassword()));
                    return getAuthenticationResponseMono(foundUser);
                })
                .switchIfEmpty(Mono.defer(()->{
                    return Mono.error(new RuntimeException("User not found"));
                }));
    }
}
