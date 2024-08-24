package Chat.Entity;

import Chat.Core.Enums.MessageType;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = "messages")
public class Message {
    @Id
    private String id;
    @Field
    private String groupId;
    @Field
    private String sender;
    @Field
    private String message;
    @Field
    private MessageType type;
    @Field
    private LocalDateTime timestamp;
}
