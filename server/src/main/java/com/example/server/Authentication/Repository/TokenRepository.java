package com.example.server.Authentication.Repository;

import com.example.server.Authentication.Entity.TokenEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TokenRepository extends MongoRepository<TokenEntity,String> {
    Optional<TokenEntity> findByRefreshToken(String refreshToken);
    Optional<TokenEntity> findByEmail(String email);
    Optional<TokenEntity> findByAccessToken(String accessToken);
}




