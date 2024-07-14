package com.example.server.Core.Interfaces;

import com.example.server.Core.DataTransferObjects.TaskRequest;
import com.example.server.Entity.TaskEntity;
import java.util.List;

public interface IGoalService {
    TaskEntity CreateTask(TaskRequest taskRequest);
    List<TaskEntity> FetchAllTasksByCurrentUser();
    TaskEntity UpdateTask(String id, TaskRequest taskRequest);
    TaskEntity FetchTaskById(String id);
    void DeleteTask(String id);

}
