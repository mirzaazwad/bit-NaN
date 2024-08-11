package Goals.Repository;


import Goals.Model.TaskEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface TaskRepository extends MongoRepository<TaskEntity, String> {
    @Query("{'userEmail': ?0, 'startTime': { $lte: ?1 }, 'endTime': { $gte: ?1 }}")
    List<TaskEntity> findTasksByUserAndDateRange(String userEmail, LocalDateTime currentDate);

    List<TaskEntity> findByUserEmail(String UserEmail);
}