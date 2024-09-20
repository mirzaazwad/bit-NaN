package Chat.Core.DataTransferObjects;

import Chat.Core.Enums.MessageType;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage{
    private String content;
    private MessageType type;
}
