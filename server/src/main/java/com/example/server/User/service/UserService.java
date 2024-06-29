package com.example.server.User.service;


import com.example.server.User.controller.AuthenticationRequest;
import com.example.server.User.controller.AuthenticationResponse;
import com.example.server.User.controller.RegisterRequest;
import com.example.server.User.entity.Role;
import com.example.server.User.entity.UserEntity;
import com.example.server.User.repository.UserRepository;
import com.example.server.config.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
        var user= UserEntity.builder().username(request.getUsername()).password(passwordEncoder.encode(request.getPassword())).role(Role.USER).email(request.getEmail()).build();
        userRepository.save(user);
        var jwtToken=jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user=userRepository.findByEmail(request.getEmail()).orElseThrow(
                ()->new UsernameNotFoundException("User is not authentic")
        );
        var jwtToken=jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
}
