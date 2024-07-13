package com.example.server.Authentication.Service;


import com.example.server.Authentication.Core.DataTypeObjects.*;
import com.example.server.Authentication.Core.Enums.Role;
import com.example.server.Authentication.Entity.TokenEntity;
import com.example.server.Authentication.Entity.UserEntity;
import com.example.server.Authentication.Repository.TokenRepository;
import com.example.server.Authentication.Repository.UserRepository;
import com.example.server.Configuration.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
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
            var newToken= TokenEntity.builder().accessToken(accessToken).refreshToken(refreshToken).role(newUser.getRole()).email(newUser.getEmail()).issued_time(new Date()).build();
            tokenRepository.save(newToken);
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
                    ()->new Exception("Bad credentials")
            );
            var accessToken=jwtService.generateToken(user);
            var refreshToken=jwtService.generateRefreshToken(user);
            var newToken= TokenEntity.builder().accessToken(accessToken).refreshToken(refreshToken).role(user.getRole()).email(user.getEmail()).issued_time(new Date()).build();
            tokenRepository.save(newToken);
            return AuthenticationResponse.builder().access(accessToken).refresh(refreshToken).message("Successfully Authenticated").build();
        }
        catch(Exception e){
            return AuthenticationResponse.ErrorResponse(e.getMessage());
        }
    }

    public TokenResponse getToken(TokenRequest request){
        try{
            var tokenFound=tokenRepository.findByRefreshToken(request.getRefresh()).orElseThrow(
                    ()->new Exception("Token not found")
            );
            String email=tokenFound.getEmail();
            Role role=tokenFound.getRole();
            Date issued_time=tokenFound.getIssued_time();
            var user=userRepository.findByEmail(email).orElseThrow(
                    ()->new Exception("Bad credentials")
            );
            tokenRepository.deleteByRefreshToken(request.getRefresh()).orElseThrow(
                    ()->new Exception("Failed Delete of Refresh Token")
            );
            var accessToken=jwtService.generateToken(user);
            var token=TokenEntity.builder().accessToken(accessToken).refreshToken(request.getRefresh()).issued_time(issued_time).role(role).email(email).build();
            tokenRepository.save(token);
            return TokenResponse.builder().access(accessToken).message("Successfully Authenticated").build();
        }
        catch(Exception e){
            return TokenResponse.ErrorResponse(e.getMessage());
        }
    }
}
