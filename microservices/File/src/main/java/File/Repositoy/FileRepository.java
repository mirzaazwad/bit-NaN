package File.Repositoy;

import File.Entity.FileEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileRepository extends MongoRepository<FileEntity, String> {
}
