package Profile.Repository;

import Profile.Entity.TimerEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimerRepository extends MongoRepository<TimerEntity, String> {
}
