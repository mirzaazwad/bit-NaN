package Forum.Features.Forum.Controller;

import Forum.Features.Forum.Core.DataTypeObjects.Forum.Request.ForumCreateRequest;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Request.ForumDeleteRequest;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Request.ForumUpdateRequest;
import Forum.Features.Forum.Service.ForumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/forum")
public class ForumController {
    private final ForumService forumService;

    @PostMapping("/create")
    public Mono<ResponseEntity<?>> createForum(@RequestBody ForumCreateRequest request) {
        try{
            return forumService.create(request).map(ResponseEntity::ok);
        }
        catch(Exception e){
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @PostMapping("/update")
    public Mono<ResponseEntity<?>> updateForum(@RequestBody ForumUpdateRequest request) {
        try{
            return forumService.update(request).map(ResponseEntity::ok);
        }
        catch(Exception e){
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<?>> deleteForum(@RequestBody ForumDeleteRequest request) {
        try{
            return forumService.delete(request).map(ResponseEntity::ok);
        }
        catch(Exception e){
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @GetMapping("/find/{id}")
    @ResponseBody
    public ResponseEntity<?> findForumById(@PathVariable String id) {
        try{
            return ResponseEntity.ok(forumService.getById(id));
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> findAll() {
        try{
            return ResponseEntity.ok(forumService.getAll());
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
