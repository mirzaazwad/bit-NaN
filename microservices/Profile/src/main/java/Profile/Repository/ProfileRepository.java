package Profile.Repository;

import Profile.Entity.ProfileEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProfileRepository extends MongoRepository<ProfileEntity, String> {
    List<ProfileEntity> findByUserEmail(String userEmail);
}
