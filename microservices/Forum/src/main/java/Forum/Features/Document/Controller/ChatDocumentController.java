package Forum.Features.Document.Controller;

import Forum.Features.Document.Core.DataTypeObjects.Request.AddDocumentRequest;
import Forum.Features.Document.Core.DataTypeObjects.Response.AddDocumentResponse;
import Forum.Features.Document.Core.DataTypeObjects.Response.ChatDocumentFindResponse;
import Forum.Features.Document.Service.ChatDocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.UUID;

@RestController
@RequestMapping("/api/forum/chat/document")
@RequiredArgsConstructor
public class ChatDocumentController {

    private final ChatDocumentService chatDocumentService;

    @PostMapping("/create")
    public Mono<ResponseEntity<AddDocumentResponse>> create(@RequestBody AddDocumentRequest addDocumentRequest) {
        return chatDocumentService.saveDocument(addDocumentRequest)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.badRequest().body(AddDocumentResponse.builder().build())));
    }

    @GetMapping("/find/{chatId}")
    public Mono<ResponseEntity<ChatDocumentFindResponse>> find(@PathVariable UUID chatId) {
        return chatDocumentService.getDocument(chatId).map(ResponseEntity::ok)
                .onErrorResume(e->Mono.just(ResponseEntity.notFound().build()));
    }
}
