package File.Repositoy;

import File.Entity.AvatarEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MarketRepository extends MongoRepository<AvatarEntity, String> {
}
