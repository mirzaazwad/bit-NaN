package File.Repositoy;

import File.Entity.AvatarEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MarketRepository extends MongoRepository<AvatarEntity, String> {
}
