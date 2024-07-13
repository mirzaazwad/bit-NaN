package com.example.server.Authentication.Service;


import com.example.server.Authentication.Core.Enums.Role;
import com.example.server.Authentication.Entity.UserEntity;
import com.example.server.Authentication.Repository.UserRepository;
import com.example.server.Configuration.JWTService;
import com.example.server.Authentication.Core.DataTypeObjects.AuthenticationRequest;
import com.example.server.Authentication.Core.DataTypeObjects.AuthenticationResponse;
import com.example.server.Authentication.Core.DataTypeObjects.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user=userRepository.findByEmail(request.getEmail());
        if(user.isEmpty()){
            var newUser= UserEntity.builder().username(request.getUsername()).password(passwordEncoder.encode(request.getPassword())).role(Role.USER).email(request.getEmail()).build();
            userRepository.save(newUser);
            var accessToken=jwtService.generateToken(newUser);
            var refreshToken=jwtService.generateRefreshToken(newUser);
            return AuthenticationResponse.builder().access(accessToken).refresh(refreshToken).message("Successfully Registered").build();
        }
        else{
            return AuthenticationResponse.ErrorResponse("User already exists");
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            var user=userRepository.findByEmail(request.getEmail()).orElseThrow(
                    ()->new Exception("User not found")
            );
            var accessToken=jwtService.generateToken(user);
            var refreshToken=jwtService.generateRefreshToken(user);
            return AuthenticationResponse.builder().access(accessToken).refresh(refreshToken).message("Successfully Authenticated").build();
        }
        catch(Exception e){
            return AuthenticationResponse.ErrorResponse(e.getMessage());
        }
    }
}
