package com.example.server.Goals.Controller;

import com.example.server.Goals.Core.DataTransferObjects.TaskRequest;
import com.example.server.Goals.Core.DataTransferObjects.ErrorResponse;
import com.example.server.Goals.Core.Interfaces.IGoalService;
import com.example.server.Goals.Entity.TaskEntity;
import com.example.server.Goals.Service.GoalService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/goals")
@RequiredArgsConstructor
@Tag(name="Goals")
public class GoalController {

    private final GoalService goalService;
    @PostMapping("/create")
    public ResponseEntity<?> createTask(@RequestBody TaskRequest taskRequest){
        try{
            return ResponseEntity.ok(goalService.CreateTask(taskRequest));
        }catch(Exception e){
            System.out.println("Exception occurred: " + e);
            ErrorResponse errorResponse = new ErrorResponse("An error occurred while fetching tasks: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
    @GetMapping("/fetch")
    public ResponseEntity<?> fetchTasks(){
        try{
            return ResponseEntity.ok(goalService.FetchAllTasksByCurrentUser());
        }catch(Exception e){
            System.out.println("Exception occurred: " + e);
            ErrorResponse errorResponse = new ErrorResponse("An error occurred while fetching tasks: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateTask(@PathVariable String id, @RequestBody TaskRequest taskRequest){
        try{
            return ResponseEntity.ok(goalService.UpdateTask(id, taskRequest));
        }catch (Exception e){
            System.out.println("Exception occurred: " + e);
            ErrorResponse errorResponse = new ErrorResponse("An error occurred while fetching tasks: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
    @GetMapping("/fetch/{id}")
    public ResponseEntity<?> fetchTaskById(@PathVariable String id){
        try{
            return ResponseEntity.ok(goalService.FetchTaskById(id));
        }catch (Exception e){
            System.out.println("Exception occurred: " + e);
            ErrorResponse errorResponse = new ErrorResponse("An error occurred while fetching tasks: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable String id){
        try{
            goalService.DeleteTask(id);
            return ResponseEntity.ok("Task id: "  + id + " deleted successfully");
        }catch (Exception e){
            System.out.println("Exception occurred: " + e);
            ErrorResponse errorResponse = new ErrorResponse("An error occurred while fetching tasks: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
}
