package Groups.Repository;

import Groups.Entity.GroupsEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GroupsRepository extends MongoRepository<GroupsEntity, String> {
    List<GroupsEntity> findAllByUsersContaining(String user);
}
