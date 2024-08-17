package Forum.Features.Chat.Core.DataTypeObjects.Chat.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatDeleteResponse {
    private boolean success;
}
