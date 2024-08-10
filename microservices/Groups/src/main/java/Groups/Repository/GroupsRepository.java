package Groups.Repository;

import Groups.Entity.GroupsEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GroupsRepository extends MongoRepository<GroupsEntity, String> {
}
