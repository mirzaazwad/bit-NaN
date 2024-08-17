package Forum.Features.Chat.Core.DataTypeObjects.Chat.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatDeleteRequest {
    private UUID id;
}
