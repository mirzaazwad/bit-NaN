package Profile.Repository;

import Profile.Entity.TimerEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TimerRepository extends MongoRepository<TimerEntity, String> {
    List<TimerEntity> findByUserEmail(String userEmail);
}
