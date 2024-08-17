package Forum.Features.Comments.Controller;

import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentDownvote.ChatCommentDownvoteCreateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentDownvote.ChatCommentDownvoteDeleteRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote.ChatCommentDownvoteCreateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote.ChatCommentDownvoteDeleteResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote.ChatCommentDownvoteFindResponse;
import Forum.Features.Comments.Service.ChatCommentDownvoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/forum/chat/comment/downvote")
@RequiredArgsConstructor
public class ChatCommentDownvoteController {

    private final ChatCommentDownvoteService chatCommentDownvoteService;

    @PostMapping("/create")
    public Mono<ResponseEntity<ChatCommentDownvoteCreateResponse>> addDownvote(@RequestBody ChatCommentDownvoteCreateRequest request) {
        return chatCommentDownvoteService.addDownvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<ChatCommentDownvoteDeleteResponse>> deleteDownvote(@RequestBody ChatCommentDownvoteDeleteRequest request) {
        return chatCommentDownvoteService.deleteDownvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @GetMapping("/findAll/{commentId}")
    public ResponseEntity<?> getAllDownvotesForComment(@PathVariable String commentId) {
        try {
            return ResponseEntity.ok(chatCommentDownvoteService.getAllDownvotesForComment(commentId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/find/{id}")
    public Mono<ResponseEntity<ChatCommentDownvoteFindResponse>> getCommentDownvote(@PathVariable String id) {
        try {
            return chatCommentDownvoteService.getCommentDownvote(id)
                    .map(ResponseEntity::ok)
                    .defaultIfEmpty(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }
}
