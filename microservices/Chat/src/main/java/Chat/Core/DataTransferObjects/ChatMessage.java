package Chat.Core.DataTransferObjects;

import Chat.Core.Enums.MessageType;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatMessage{
    private String message;
    private Date timestamp;
    private MessageType type;
}
