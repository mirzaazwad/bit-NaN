package com.example.APIGateway.Repository;

import com.example.APIGateway.Entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository  extends MongoRepository<UserEntity,String> {
    Optional<UserEntity> findByEmail(String email);
}
