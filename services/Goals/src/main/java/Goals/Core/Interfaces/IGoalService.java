package Goals.Core.Interfaces;

import Goals.Core.DataTransferObjects.TaskRequest;
import Goals.Entity.TaskEntity;
import java.util.List;

public interface IGoalService {
    TaskEntity CreateTask(TaskRequest taskRequest);
    List<TaskEntity> FetchAllTasksByCurrentUser();
    TaskEntity UpdateTask(String id, TaskRequest taskRequest);
    TaskEntity FetchTaskById(String id);
    void DeleteTask(String id);

}
