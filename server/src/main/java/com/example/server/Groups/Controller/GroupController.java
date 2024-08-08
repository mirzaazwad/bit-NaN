package com.example.server.Groups.Controller;

import com.example.server.Groups.Core.DataTransferObjects.GroupRequest;
import com.example.server.Groups.Core.Interfaces.IGroupService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/groups")
@RequiredArgsConstructor
@Tag(name = "Groups")
public class GroupController {
    private final IGroupService groupService;

    @PostMapping("/create")
    public ResponseEntity<?> createGroup(@RequestBody GroupRequest groupRequest){
        try{
            groupService.createGroup(groupRequest);
            return ResponseEntity.ok().body("Group created successfully");
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error creating group" + e);
        }
    }
}
