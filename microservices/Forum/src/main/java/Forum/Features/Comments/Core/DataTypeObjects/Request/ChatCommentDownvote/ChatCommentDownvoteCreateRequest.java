package Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentDownvote;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatCommentDownvoteCreateRequest {
    private UUID commentId;
    private String userEmail;
}
