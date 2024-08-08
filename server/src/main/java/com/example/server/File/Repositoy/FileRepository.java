package com.example.server.File.Repositoy;

import com.example.server.File.Entity.FileEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileRepository extends MongoRepository<FileEntity, String> {
}
