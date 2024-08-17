package Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatCommentUpvoteFindResponse {
    private UUID id;
    private UUID commentId;
    private String userEmail;
    private LocalDate created;
}
