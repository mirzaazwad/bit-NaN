package com.example.server.User.repository;

import com.example.server.User.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository  extends MongoRepository<UserEntity,String> {
    Optional<UserEntity> findByEmail(String email);
}
