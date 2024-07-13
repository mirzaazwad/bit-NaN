package com.example.server.Authentication.Service;

import com.example.server.Authentication.Repository.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final TokenRepository tokenRepository;
    public String createToken(User user){
        return "";
    }
}
