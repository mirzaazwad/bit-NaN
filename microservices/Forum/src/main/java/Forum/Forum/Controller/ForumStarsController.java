package Forum.Forum.Controller;

import Forum.Forum.Core.DataTypeObjects.ForumStars.Request.AddStarRequest;
import Forum.Forum.Core.DataTypeObjects.ForumStars.Request.DeleteStarRequest;
import Forum.Forum.Service.ForumStarsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/forum/star")
public class ForumStarsController {
    private final ForumStarsService forumStarsService;

    @PostMapping("/create")
    public Mono<ResponseEntity<?>> createStar(@RequestBody AddStarRequest request) {
        try {
            return forumStarsService.addStar(request).map(ResponseEntity::ok);
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<?>> deleteStar(@RequestBody DeleteStarRequest request) {
        try {
            return forumStarsService.deleteStar(request).map(ResponseEntity::ok);
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @GetMapping("/find/{id}")
    @ResponseBody
    public ResponseEntity<?> findStarById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(forumStarsService.getStar(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/find-all/{forumId}")
    public ResponseEntity<?> findAllStars(@PathVariable String forumId) {
        try {
            return ResponseEntity.ok(forumStarsService.getAllStarsForForum(forumId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
