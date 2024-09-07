package Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatCommentCreateResponse {
    private UUID id;
    private UUID chatId;
    private String userEmail;
    private String comment;
    private LocalDate created;
    private Long upvotes;
    private Long downvotes;
}
