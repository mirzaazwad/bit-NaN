package Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatCommentCreateRequest {
    private UUID chatId;
    private String comment;
    private String userEmail;
}
