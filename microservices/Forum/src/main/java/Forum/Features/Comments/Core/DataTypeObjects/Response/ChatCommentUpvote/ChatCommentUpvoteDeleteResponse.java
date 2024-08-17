package Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatCommentUpvoteDeleteResponse {
    private Boolean success;
}
