package com.example.server.Profile.Controller;

import com.example.server.Profile.Core.DataTransferObjects.ProfileRequest;
import com.example.server.Profile.Core.Interfaces.IProfileService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
