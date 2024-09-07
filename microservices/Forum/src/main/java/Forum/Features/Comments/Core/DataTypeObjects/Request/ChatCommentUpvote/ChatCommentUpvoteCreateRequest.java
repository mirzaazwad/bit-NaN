package Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentUpvote;

import lombok.Data;

import java.util.UUID;

@Data
public class ChatCommentUpvoteCreateRequest {
    private UUID commentId;
    private String userEmail;
}
