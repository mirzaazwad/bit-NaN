package Groups.Controller;

import Groups.Core.DataTransferObjects.GroupsRequest;
import Groups.Core.Interfaces.IGroupsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
