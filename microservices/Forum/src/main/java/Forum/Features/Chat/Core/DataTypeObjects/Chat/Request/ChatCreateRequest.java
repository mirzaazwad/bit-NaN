package Forum.Features.Chat.Core.DataTypeObjects.Chat.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatCreateRequest {
    private UUID forumId;
    private String userEmail;
    private String prompt;
    private String response;
}
