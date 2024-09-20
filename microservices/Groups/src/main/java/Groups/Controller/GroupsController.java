package Groups.Controller;

import Groups.Core.DataTransferObjects.GroupsRequest;
import Groups.Core.Interfaces.IGroupsService;
import Groups.Entity.GroupsEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/groups")
@RequiredArgsConstructor
public class GroupsController {
    private final IGroupsService GroupsService;

    @PostMapping("/create")
    public ResponseEntity<?> createGroup(@RequestBody GroupsRequest GroupsRequest){
        try{
            GroupsService.createGroup(GroupsRequest);
            return ResponseEntity.ok().body("Groups created successfully");
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error creating Groups" + e);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> fetchGroups(){
        try{
            List<GroupsEntity> groups = GroupsService.fetchGroups();
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Groups fetched successfully");
            map.put("groups", groups);
            return ResponseEntity.ok().body(map);
        }catch (Exception e){
            return ResponseEntity.status(500).body("Error fetching Groups " + e);
        }
    }
}
