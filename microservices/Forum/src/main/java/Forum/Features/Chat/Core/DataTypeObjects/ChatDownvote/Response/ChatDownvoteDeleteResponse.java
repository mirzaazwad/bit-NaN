package Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatDownvoteDeleteResponse {
    private boolean success;
}
