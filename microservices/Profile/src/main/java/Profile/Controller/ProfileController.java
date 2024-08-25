package Profile.Controller;

import Profile.Core.DataTransferObjects.ProfileRequest;
import Profile.Core.Interfaces.IProfileService;
import Profile.Entity.ProfileEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {

    private final IProfileService service;

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody ProfileRequest request){
        try{
            service.update(request);
            return ResponseEntity.ok("Profile updated successfully");
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error updating profile "+ e);
        }
    }

    @GetMapping("/")
    public ResponseEntity<?> fetch(){
        try{
            ProfileEntity getProfile = service.getCurrentUserProfile();

            Map<String, Object> responseObj = new HashMap<>();
            responseObj.put("profile", getProfile);
            responseObj.put("message", "Profile fetched successfully");

            return ResponseEntity.ok(responseObj);
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error fetching profile "+ e);
        }
    }

    @GetMapping("/find/{email}")
    public ResponseEntity<?> findByEmail(@PathVariable String email){
        try{
            Object getProfile = service.getProfileByEmail(email);
            Map<String, Object> responseObj = new HashMap<>();
            responseObj.put("profile", getProfile);
            responseObj.put("message", "Profile fetched successfully");

            return ResponseEntity.ok(responseObj);
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error fetching profile "+ e);
        }
    }
}
