package Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatCommentDownvoteFindResponse {
    private UUID id;
    private UUID commentId;
    private String userEmail;
    private LocalDate created;
}
