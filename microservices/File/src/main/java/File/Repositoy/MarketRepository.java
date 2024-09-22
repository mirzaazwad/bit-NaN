package File.Repositoy;

import File.Entity.AvatarEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface MarketRepository extends MongoRepository<AvatarEntity, String> {
}
