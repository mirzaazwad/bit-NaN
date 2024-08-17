package Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatUpvoteDeleteResponse {
    private boolean success;
}
