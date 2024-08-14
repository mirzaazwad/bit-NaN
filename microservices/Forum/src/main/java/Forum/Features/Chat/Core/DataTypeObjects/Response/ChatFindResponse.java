package Forum.Features.Chat.Core.DataTypeObjects.Response;

import lombok.Data;

import java.sql.Date;
import java.util.UUID;

@Data
public class ChatFindResponse {
    private UUID id;
    private UUID forumId;
    private String userEmail;
    private String prompt;
    private String response;
    private Date created;
    private Long upvotes;
    private Long downvotes;
    private Long comments;
}
