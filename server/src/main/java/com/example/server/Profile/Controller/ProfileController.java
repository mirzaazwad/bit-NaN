package com.example.server.Profile.Controller;

import com.example.server.Profile.Core.DataTransferObjects.ProfileRequest;
import com.example.server.Profile.Core.Interfaces.IProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/v1/profile")
public class ProfileController {

    private final IProfileService service;

    @PostMapping("/update")
    public void update(@RequestBody ProfileRequest request){
        try{
            service.update(request);
        }catch(Exception e){

        }
    }
}
