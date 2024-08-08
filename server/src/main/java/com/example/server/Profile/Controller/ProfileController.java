package com.example.server.Profile.Controller;

import com.example.server.Profile.Core.DataTransferObjects.ProfileRequest;
import com.example.server.Profile.Core.Interfaces.IProfileService;
import com.example.server.Profile.Entity.ProfileEntity;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/profile")
@Tag(name = "Profile")
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
}
