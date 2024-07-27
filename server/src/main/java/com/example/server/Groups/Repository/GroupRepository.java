package com.example.server.Groups.Repository;

import com.example.server.Groups.Entity.GroupEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupRepository extends MongoRepository<GroupEntity, String> {
}
