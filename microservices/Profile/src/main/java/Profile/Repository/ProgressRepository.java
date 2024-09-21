package Profile.Repository;

import Profile.Entity.ProgressEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProgressRepository extends MongoRepository<ProgressEntity, String> {
    List<ProgressEntity> findByUserEmail(String userEmail);
}
