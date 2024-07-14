package com.example.server.Repository;

import com.example.server.Entity.TaskEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<TaskEntity, String> {
    List<TaskEntity> findUserByUserEmail(String UserEmail);
}
