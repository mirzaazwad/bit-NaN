package Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatCommentDownvoteDeleteResponse {
    private Boolean success;
}
