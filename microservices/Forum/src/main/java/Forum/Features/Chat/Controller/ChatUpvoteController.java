package Forum.Features.Chat.Controller;

import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Request.ChatUpvoteCreateRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Request.ChatUpvoteDeleteRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvoteCreateResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvoteDeleteResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvotesFindResponse;
import Forum.Features.Chat.Service.ChatUpvoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/forum/chat/upvote")
@RequiredArgsConstructor
public class ChatUpvoteController {

    private final ChatUpvoteService chatUpvoteService;

    @PostMapping("/create")
    public Mono<ResponseEntity<ChatUpvoteCreateResponse>> addUpvote(@RequestBody ChatUpvoteCreateRequest request) {
        return chatUpvoteService.addUpvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @PostMapping("/delete")
    public Mono<ResponseEntity<ChatUpvoteDeleteResponse>> deleteUpvote(@RequestBody ChatUpvoteDeleteRequest request) {
        return chatUpvoteService.deleteUpvote(request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.badRequest().build());
    }

    @GetMapping("/findAll/{chatId}")
    public ResponseEntity<?> getAllUpvotesForChat(@PathVariable String chatId) {
        try{
            return ResponseEntity.ok(chatUpvoteService.getAllUpvotesForChat(chatId));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/find/{id}")
    public Mono<ResponseEntity<ChatUpvotesFindResponse>> getChatUpvote(@PathVariable String id) {
        try{
            return chatUpvoteService.getChatUpvote(id)
                    .map(ResponseEntity::ok)
                    .defaultIfEmpty(ResponseEntity.notFound().build());
        }
        catch (Exception e){
            return Mono.just(ResponseEntity.badRequest().build());
        }
    }
}
