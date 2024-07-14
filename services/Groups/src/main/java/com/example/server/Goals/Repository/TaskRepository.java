package com.example.server.Goals.Repository;

import com.example.server.Goals.Entity.TaskEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<TaskEntity, String> {
    List<TaskEntity> findUserByUserEmail(String UserEmail);
}
