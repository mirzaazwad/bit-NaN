package Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatUpvoteCreateRequest {
    private UUID chatId;
    private String userEmail;
}
