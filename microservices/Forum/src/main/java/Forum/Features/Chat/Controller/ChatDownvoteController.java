package Forum.Features.Chat.Controller;

import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Request.ChatDownvoteCreateRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Request.ChatDownvoteDeleteRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvoteCreateResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvoteDeleteResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvotesFindResponse;
import Forum.Features.Chat.Service.ChatDownvoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/forum/chat/downvote")
@RequiredArgsConstructor
public class ChatDownvoteController {

    private final ChatDownvoteService chatDownvoteService;

    @PostMapping("/create")
    public Mono<ResponseEntity<ChatDownvoteCreateResponse>> addDownvote(@RequestBody ChatDownvoteCreateRequest request) {
        return chatDownvoteService.addDownvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<ChatDownvoteDeleteResponse>> deleteDownvote(@RequestBody ChatDownvoteDeleteRequest request) {
        return chatDownvoteService.deleteDownvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @GetMapping("/findAll/{chatId}")
    public ResponseEntity<?> getAllDownvotesForChat(@PathVariable String chatId) {
        try {
            return ResponseEntity.ok(chatDownvoteService.getAllDownvotesForChat(chatId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/find/{id}")
    public Mono<ResponseEntity<ChatDownvotesFindResponse>> getChatDownvote(@PathVariable String id) {
        try {
            return chatDownvoteService.getChatDownvote(id)
                    .map(ResponseEntity::ok)
                    .defaultIfEmpty(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }
}
