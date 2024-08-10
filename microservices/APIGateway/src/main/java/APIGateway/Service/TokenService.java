package APIGateway.Service;

import APIGateway.Core.DataTypeObjects.*;
import APIGateway.Repository.TokenRepository;
import APIGateway.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final TokenRepository tokenRepository;
    private final UserRepository userRepository;
    private final JWTService jwtService;
    private final ReactiveUserDetailsService userDetailsService;

    public Mono<TokenResponse> getToken(TokenRequest tokenRequest) {
        return tokenRepository.findByRefreshToken(tokenRequest.getRefresh())
                .flatMap(token->{
                    String email=token.getEmail();
                    return userRepository.findByEmail(email).
                            flatMap(foundUser->{
                                if(jwtService.isTokenExpired(token.getRefreshToken())){
                                    tokenRepository.delete(token);
                                    return Mono.error(new RuntimeException("Token Has Expired"));
                                }
                                var accessToken =jwtService.generateToken(foundUser);
                                token.setAccessToken(accessToken);
                                return tokenRepository.save(token)
                                        .flatMap(tokenEntity -> Mono.just(TokenResponse.builder().access(accessToken).message("Success").build()));
                            })
                            .switchIfEmpty(Mono.error(new RuntimeException("User not found")));
                })
                .switchIfEmpty(Mono.error(new Exception("Token Not Found")));
    }

    public Mono<TokenVerificationResponse> verifyToken(TokenVerificationRequest tokenRequest) {
        try{
            String email=jwtService.extract(tokenRequest.getAccess());
            return userDetailsService.findByUsername(email)
                    .flatMap(foundUser->{
                        if(jwtService.isTokenValid(tokenRequest.getAccess(),foundUser)){
                            return Mono.just(TokenVerificationResponse.builder().verified(true).message("Success").build());
                        }
                        else{
                            return Mono.error(new Exception("Token is Invalid"));
                        }
                    })
                    .switchIfEmpty(Mono.error(new Exception("Token is Invalid")));
        }
        catch(Exception e){
            return Mono.error(e);
        }
    }

    public Mono<LogoutResponse> logout(LogoutRequest logoutRequest) {
        return tokenRepository.deleteByRefreshToken(logoutRequest.getRefresh())
                .flatMap(tokenEntity -> Mono.just(LogoutResponse.builder().message("Logout Successful").build()))
                .switchIfEmpty(Mono.error(new RuntimeException("Token Not Found Logout Failed")));
    }
}
