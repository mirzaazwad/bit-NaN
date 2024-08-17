package Forum.Features.Comments.Controller;

import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentUpvote.ChatCommentUpvoteCreateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentUpvote.ChatCommentUpvoteDeleteRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteCreateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteDeleteResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteFindResponse;
import Forum.Features.Comments.Service.ChatCommentUpvoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/forum/chat/comment/upvote")
@RequiredArgsConstructor
public class ChatCommentUpvoteController {

    private final ChatCommentUpvoteService chatCommentUpvoteService;

    @PostMapping("/create")
    public Mono<ResponseEntity<ChatCommentUpvoteCreateResponse>> addUpvote(@RequestBody ChatCommentUpvoteCreateRequest request) {
        return chatCommentUpvoteService.addUpvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<ChatCommentUpvoteDeleteResponse>> deleteUpvote(@RequestBody ChatCommentUpvoteDeleteRequest request) {
        return chatCommentUpvoteService.deleteUpvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @GetMapping("/findAll/{commentId}")
    public ResponseEntity<?> getAllUpvotesForComment(@PathVariable String commentId) {
        try {
            return ResponseEntity.ok(chatCommentUpvoteService.getAllUpvotesForComment(commentId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/find/{id}")
    public Mono<ResponseEntity<ChatCommentUpvoteFindResponse>> getCommentUpvote(@PathVariable String id) {
        try {
            return chatCommentUpvoteService.getCommentUpvote(id)
                    .map(ResponseEntity::ok)
                    .defaultIfEmpty(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }
}
