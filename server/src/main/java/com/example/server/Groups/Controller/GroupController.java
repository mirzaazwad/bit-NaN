package com.example.server.Groups.Controller;

import com.example.server.Groups.Core.DataTransferObjects.GroupRequest;
import com.example.server.Groups.Core.Interfaces.IGroupService;
import com.example.server.Groups.Entity.GroupEntity;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/all")
    public ResponseEntity<?> fetchGroups(){
        try{
            List<GroupEntity> groups =  groupService.fetchGroups();

            Map<String, Object> response = new HashMap<>();
            response.put("groups", groups);
            response.put("message", "Groups fetched successfully");
            return ResponseEntity.ok().body(response);
        }catch (Exception e){
            return ResponseEntity.status(500).body("Error fetching groups "+ e);
        }
    }
}
