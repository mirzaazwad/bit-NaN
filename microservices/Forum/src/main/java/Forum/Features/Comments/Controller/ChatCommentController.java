package Forum.Features.Comments.Controller;

import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment.ChatCommentCreateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment.ChatCommentDeleteRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment.ChatCommentUpdateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentCreateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentDeleteResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentUpdateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentsFindResponse;
import Forum.Features.Comments.Service.ChatCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/forum/chat/comment")
@RequiredArgsConstructor
public class ChatCommentController {

    private final ChatCommentService chatCommentService;

    @PostMapping("/create")
    public Mono<ResponseEntity<ChatCommentCreateResponse>> createComment(@RequestBody ChatCommentCreateRequest request) {
        return chatCommentService.createComment(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @PostMapping("/update")
    public Mono<ResponseEntity<ChatCommentUpdateResponse>> updateComment(@RequestBody ChatCommentUpdateRequest request) {
        return chatCommentService.updateComment(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete")
    public Mono<ResponseEntity<ChatCommentDeleteResponse>> deleteComment(@RequestBody ChatCommentDeleteRequest request) {
        return chatCommentService.deleteComment(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping("/find/{id}")
    public Mono<ResponseEntity<ChatCommentsFindResponse>> findCommentById(@PathVariable String id) {
        return chatCommentService.findCommentById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping("/findAll/{chatId}")
    public ResponseEntity<Flux<ChatCommentsFindResponse>> findAllCommentsForChat(@PathVariable String chatId) {
        try {
            return ResponseEntity.ok(chatCommentService.findAllCommentsForChat(chatId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Flux.error(new RuntimeException(e.getMessage())));
        }
    }
}
