package Forum.Features.Document.Controller;

import Forum.Features.Document.Core.DataTypeObjects.Request.AddDocumentRequest;
import Forum.Features.Document.Service.ChatDocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/forum/chat/document")
@RequiredArgsConstructor
public class ChatDocumentController {

    private final ChatDocumentService chatDocumentService;

    @PostMapping(value="/create/{chatId}", consumes = {"multipart/form-data"})
    public ResponseEntity<?> create(@RequestPart("file") MultipartFile file, @PathVariable UUID chatId){
        try{
            System.out.println("Comes Here");
            AddDocumentRequest addDocumentRequest = AddDocumentRequest.builder().chatId(chatId).file(file).build();
            System.out.println(addDocumentRequest);
            return ResponseEntity.ok(chatDocumentService.saveDocument(addDocumentRequest));
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
