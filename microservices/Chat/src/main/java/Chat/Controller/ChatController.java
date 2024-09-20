package Chat.Controller;

import Chat.Core.DataTransferObjects.ChatMessage;
import Chat.Core.Interface.IChatService;
import Chat.Core.Utils.Reusables;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class ChatController {

    private final IChatService chatService;

    @MessageMapping("/chat.sendMessage/{groupId}")
    @SendTo("/topic/group/{groupId}")
    public ChatMessage sendMessage(
            @DestinationVariable String groupId,
            @Payload ChatMessage chatMessage
    ){
        chatService.saveMessage(groupId, chatMessage);
        return chatMessage;
    }

    @MessageMapping("/chat.addUser/{groupId}")
    @SendTo("/topic/group/{groupId}")
    public ChatMessage addUser(
            @DestinationVariable String groupId,
            @Payload ChatMessage chatMessage,
            SimpMessageHeaderAccessor headerAccessor
    ){
        //Add Username in websocket session
        headerAccessor.getSessionAttributes().put("username", Reusables.getCurrentUsername());
        return chatMessage;
    }

}
