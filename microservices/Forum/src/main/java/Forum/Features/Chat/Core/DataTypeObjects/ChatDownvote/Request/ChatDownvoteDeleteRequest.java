package Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatDownvoteDeleteRequest {
    private UUID id;
}
