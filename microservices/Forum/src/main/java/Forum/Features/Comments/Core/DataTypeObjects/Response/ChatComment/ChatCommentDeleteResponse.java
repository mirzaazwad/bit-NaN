package Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatCommentDeleteResponse {
    private Boolean success;
}
