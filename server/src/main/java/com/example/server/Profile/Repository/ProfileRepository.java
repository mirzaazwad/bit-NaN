package com.example.server.Profile.Repository;

import com.example.server.Profile.Entity.ProfileEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProfileRepository extends MongoRepository<ProfileEntity, String> {
    List<ProfileEntity> findByUserEmail(String userEmail);
}
