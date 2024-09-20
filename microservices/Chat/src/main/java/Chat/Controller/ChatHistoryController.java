package Chat.Controller;

import Chat.Core.Interface.IChatService;
import Chat.Entity.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatHistoryController {
    private final IChatService chatService;

    @GetMapping("/history/{groupId}")
    public ResponseEntity<?> getChatHistory(@PathVariable String groupId){
        try{
            List<Message> messages = chatService.getChatHistory(groupId);
            return ResponseEntity.ok(messages);
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error fetching chat history "+ e);
        }
    }
}
