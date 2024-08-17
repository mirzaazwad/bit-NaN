package Forum.Features.Chat.Controller;

import Forum.Features.Chat.Core.DataTypeObjects.Chat.Request.ChatCreateRequest;
import Forum.Features.Chat.Core.DataTypeObjects.Chat.Request.ChatDeleteRequest;
import Forum.Features.Chat.Core.DataTypeObjects.Chat.Response.ChatFindResponse;
import Forum.Features.Chat.Service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/forum/chat")
public class ChatController {

    private final ChatService chatService;

    @PostMapping("/create")
    public Mono<ResponseEntity<?>> createChat(@RequestBody ChatCreateRequest request) {
        try {
            return chatService.addChat(request)
                    .map(ResponseEntity::ok);
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @PostMapping("/delete")
    public Mono<? extends ResponseEntity<?>> deleteChat(@RequestBody ChatDeleteRequest request) {
        try {
            return chatService.deleteChat(request)
                    .map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return Mono.just(ResponseEntity.badRequest().body(e.getMessage()));
        }
    }

    @GetMapping("/find/{id}")
    public Mono<ResponseEntity<ChatFindResponse>> findChatById(@PathVariable String id) {
            try{
                return chatService.getChat(id)
                        .map(ResponseEntity::ok)
                        .defaultIfEmpty(ResponseEntity.notFound().build());
            }
            catch(Exception e){
                return Mono.just(ResponseEntity.badRequest().build());
            }
    }

    @GetMapping("/findAll/{forumId}")
    public ResponseEntity<?> findAllChatsForForum(@PathVariable String forumId) {
        try {
            return ResponseEntity.ok(chatService.getAllChatsForForum(forumId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
