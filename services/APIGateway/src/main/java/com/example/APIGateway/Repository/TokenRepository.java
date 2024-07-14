package com.example.APIGateway.Repository;

import com.example.APIGateway.Entity.TokenEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TokenRepository extends MongoRepository<TokenEntity,String> {
    Optional<TokenEntity> findByRefreshToken(String refreshToken);
    Optional<TokenEntity> findByAccessToken(String accessToken);
    Optional<TokenEntity> deleteByRefreshToken(String refreshToken);
}




