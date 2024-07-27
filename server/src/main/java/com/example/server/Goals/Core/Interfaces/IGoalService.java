package com.example.server.Goals.Core.Interfaces;

import com.example.server.Goals.Core.DataTransferObjects.TaskRequest;
import com.example.server.Goals.Entity.TaskEntity;
import java.util.List;

public interface IGoalService {
    TaskEntity CreateTask(TaskRequest taskRequest);
    List<TaskEntity> FetchAllTasksByCurrentUser();
    List<TaskEntity> FetchCurrentDayTasksByUser();
    TaskEntity UpdateTask(String id, TaskRequest taskRequest);
    TaskEntity FetchTaskById(String id);
    void DeleteTask(String id);

}
