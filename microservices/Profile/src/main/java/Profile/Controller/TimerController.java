package Profile.Controller;

import Profile.Core.DataTransferObjects.TimerRequest;
import Profile.Core.Interfaces.ITimerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/timer")
public class TimerController {
    private final ITimerService service;

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody TimerRequest request){
        try{
            service.saveTimerInfo(request);
            return ResponseEntity.ok("Timer saved successfully");
        }catch (Exception e) {
            return ResponseEntity.status(500).body("Error saving timer information " + e);
        }
    }

    @GetMapping("/")
    public ResponseEntity<?> fetch(){
        try{
            return ResponseEntity.ok(service.fetch());
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error fetching timer data " + e);
        }
    }

    @GetMapping("/today")
    public ResponseEntity<?> fetchToday(){
        try{
            return ResponseEntity.ok(service.fetchToday());
        }catch(Exception e) {
            return ResponseEntity.status(500).body("Error fetching timer daily data " + e);
        }
    }

    @GetMapping("/points")
    public ResponseEntity<?> fetchPoints(){
        try{
            return ResponseEntity.ok(service.fetchPoints());
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error fetching points "+ e);
        }
    }
}
