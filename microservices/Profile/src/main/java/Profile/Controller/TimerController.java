package Profile.Controller;

import Profile.Core.DataTransferObjects.TimerRequest;
import Profile.Core.Interfaces.ITimerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}