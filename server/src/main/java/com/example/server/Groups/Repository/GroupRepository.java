package com.example.server.Groups.Repository;

import com.example.server.Groups.Entity.GroupEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GroupRepository extends MongoRepository<GroupEntity, String> {
    List<GroupEntity> getAllByUsersContains(String user);
}
