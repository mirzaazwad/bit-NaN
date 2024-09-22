package Profile.Repository;

import Profile.Entity.UserProductEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserProductsRepository extends MongoRepository<UserProductEntity, String> {
    List<UserProductEntity> findByUserEmail(String userEmail);
}
