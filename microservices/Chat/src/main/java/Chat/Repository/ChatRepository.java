package Chat.Repository;

import Chat.Entity.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatRepository extends MongoRepository<Message, String> {
    List<Message> findByGroupId(String groupId);
}
