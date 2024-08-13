package Forum.Features.Forum.Controller;

import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request.AddReviewRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request.DeleteReviewRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request.UpdateReviewRequest;
import Forum.Features.Forum.Service.ForumReviewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/forum/review")
public class ForumReviewsController {
    private final ForumReviewsService forumReviewsService;

    @PostMapping("/create")
    public Mono<ResponseEntity<?>> createReview(@RequestBody AddReviewRequest request) {
        try{
            return forumReviewsService.addReview(request).map(ResponseEntity::ok);
        }
        catch(Exception e){
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @PostMapping("/update")
    public Mono<ResponseEntity<?>> updateForum(@RequestBody UpdateReviewRequest request) {
        try{
            return forumReviewsService.updateReview(request).map(ResponseEntity::ok);
        }
        catch(Exception e){
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<?>> deleteForum(@RequestBody DeleteReviewRequest request) {
        try{
            return forumReviewsService.deleteReview(request).map(ResponseEntity::ok);
        }
        catch(Exception e){
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @GetMapping("/find/{id}")
    @ResponseBody
    public ResponseEntity<?> findForumById(@PathVariable String id) {
        try{
            return ResponseEntity.ok(forumReviewsService.getReview(id));
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/find-all/{forumId}")
    public ResponseEntity<?> findAll(@PathVariable String forumId) {
        try{
            return ResponseEntity.ok(forumReviewsService.getAllReviewsForForum(forumId));
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
