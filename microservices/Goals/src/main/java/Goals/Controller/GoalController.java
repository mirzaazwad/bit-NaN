package Goals.Controller;
import Goals.Core.DataTransferObjects.TaskRequest;
import Goals.Core.DataTransferObjects.ErrorResponse;
import Goals.Core.Interfaces.IGoalService;
import Goals.Core.Utils.Reusables;
import Goals.Service.JWTService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/goals")
@RequiredArgsConstructor
public class GoalController {

    private final IGoalService goalService;

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
    @GetMapping("/fetchAll")
    public ResponseEntity<?> fetchTasks(){
        try{
            return ResponseEntity.ok(goalService.FetchAllTasksByCurrentUser());
        }catch(Exception e){
            System.out.println("Exception occurred: " + e);
            ErrorResponse errorResponse = new ErrorResponse("An error occurred while fetching tasks: " + e.getMessage());
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
    @GetMapping("/fetchToday")
    public ResponseEntity<?> fetchTodayTasks(){
        try{
            return ResponseEntity.ok(goalService.FetchCurrentDayTasksByUser());
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



