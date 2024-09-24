package Chat.Controller;

import Chat.Core.DataTransferObjects.ChatMessage;
import Chat.Core.Enums.MessageType;
import Chat.Core.Interface.IChatService;
import Chat.Core.Utils.Reusables;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

import java.util.Objects;

@CrossOrigin("http://localhost:3000")
@Controller
@RequiredArgsConstructor
public class ChatController {

    private final IChatService chatService;

    @MessageMapping("/group/{groupId}")
    @SendTo("/topic/group/{groupId}")
    public ChatMessage sendMessage(
            @DestinationVariable String groupId,
            @Payload ChatMessage chatMessage,
            SimpMessageHeaderAccessor headerAccessor
    ){
        Objects.requireNonNull(headerAccessor.getSessionAttributes()).put("username", Reusables.getCurrentUsername());
        if(chatMessage.getMessage().isEmpty() || chatMessage.getType().equals(MessageType.JOIN) || chatMessage.getType().equals(MessageType.LEAVE)){
            return chatMessage;
        }
        else{
            System.out.println(chatMessage.getSender());
            chatService.saveMessage(groupId, chatMessage);
        }
        return chatMessage;
    }

}
