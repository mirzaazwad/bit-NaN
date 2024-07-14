package com.example.APIGateway.Service;


import com.example.APIGateway.Core.DataTypeObjects.*;
import com.example.APIGateway.Core.Enums.Role;
import com.example.APIGateway.Entity.TokenEntity;
import com.example.APIGateway.Entity.UserEntity;
import com.example.APIGateway.Repository.TokenRepository;
import com.example.APIGateway.Repository.UserRepository;
import com.example.APIGateway.Configuration.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
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
    private final UserDetailsService userDetailsService;

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
            var user=userRepository.findByEmail(email).orElseThrow(
                    ()->new Exception("Bad credentials")
            );
            var token=tokenRepository.findByRefreshToken(request.getRefresh()).orElseThrow(
                    ()->new Exception("Failed Delete of Refresh Token")
            );
            if(jwtService.isTokenExpired(token.getRefreshToken())){
                token.setExpired(true);
                token.setRevoked(true);
                tokenRepository.save(token);
                throw new Exception("Token Expired");
            }
            var accessToken=jwtService.generateToken(user);
            token.setAccessToken(accessToken);
            tokenRepository.save(token);
            return TokenResponse.builder().access(accessToken).message("Successfully Authenticated").build();
        }
        catch(Exception e){
            return TokenResponse.ErrorResponse(e.getMessage());
        }
    }

    public TokenVerificationResponse verify(TokenVerificationRequest request){
        try{
            String email=this.jwtService.extract(request.getAccess());
            var userDetails=userDetailsService.loadUserByUsername(email);
            if(jwtService.isTokenValid(request.getAccess(), userDetails)){
                return TokenVerificationResponse.builder().verified(true).build();
            }
            return TokenVerificationResponse.builder().verified(false).build();
        }
        catch(Exception e){
            return TokenVerificationResponse.builder().verified(false).build();
        }
    }
}
