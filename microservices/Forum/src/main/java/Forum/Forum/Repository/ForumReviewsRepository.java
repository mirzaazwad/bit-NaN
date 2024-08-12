package Forum.Forum.Repository;

import Forum.Forum.Model.ForumReviewsEntity;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface ForumReviewsRepository extends ReactiveCrudRepository<ForumReviewsEntity,String> {
}
