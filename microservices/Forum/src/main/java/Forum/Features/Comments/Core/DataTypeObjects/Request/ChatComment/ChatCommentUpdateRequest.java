package Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatCommentUpdateRequest {
    private UUID id;
    private String comment;
}
