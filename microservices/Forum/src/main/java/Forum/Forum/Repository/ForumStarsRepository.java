package Forum.Forum.Repository;

import Forum.Forum.Model.ForumStarsEntity;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ForumStarsRepository extends ReactiveCrudRepository<ForumStarsEntity,String> {
}
