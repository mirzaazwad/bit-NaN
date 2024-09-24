package Groups.Repository;

import Groups.Entity.GroupFilesEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GroupFilesRepository extends MongoRepository<GroupFilesEntity, String> {
    List<GroupFilesEntity> findByGroupId(String groupId);
}
