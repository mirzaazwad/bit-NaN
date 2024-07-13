package com.example.server.Goals.Service;

import com.example.server.Goals.Core.DataTransferObjects.TaskRequest;
import com.example.server.Goals.Core.Interfaces.IGoalService;
import com.example.server.Goals.Core.Utils.Reusables;
import com.example.server.Goals.Entity.TaskEntity;
import com.example.server.Goals.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GoalService implements IGoalService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public TaskEntity CreateTask(TaskRequest taskRequest) {
        TaskEntity newTask = this.ConvertToEntity(taskRequest);
        return this.taskRepository.save(newTask);
    }

    @Override
    public List<TaskEntity> FetchAllTasksByCurrentUser() {
        String user = Reusables.getCurrentUsername();
        return this.taskRepository.findUserByUserEmail(user);
    }

    @Override
    public TaskEntity UpdateTask(String id,TaskRequest taskRequest) {
        TaskEntity updatedTask = TaskEntity.builder()
                .id(id)
                .userEmail(Reusables.getCurrentUsername())
                .title(taskRequest.getTitle())
                .description(taskRequest.getDescription())
                .startTime(taskRequest.getStartTime())
                .endTime(taskRequest.getEndTime())
                .status(taskRequest.getStatus())
                .notes(taskRequest.getNotes())
                .build();
        TaskEntity savedTask = this.taskRepository.save(updatedTask);
        return savedTask;
    }

    @Override
    public TaskEntity FetchTaskById(String id) {
        TaskEntity taskEntity = this.taskRepository.findById(id).orElse(null);
        return taskEntity != null ? taskEntity : null;
    }

    @Override
    public void DeleteTask(String id){
        this.taskRepository.deleteById(id);
    }

    private TaskEntity ConvertToEntity(TaskRequest taskRequest){
        return TaskEntity.builder()
                .title(taskRequest.getTitle())
                .userEmail(Reusables.getCurrentUsername())
                .description(taskRequest.getDescription())
                .status(taskRequest.getStatus())
                .startTime(taskRequest.getStartTime())
                .endTime(taskRequest.getEndTime())
                .notes(taskRequest.getNotes())
                .build();
    }

}
