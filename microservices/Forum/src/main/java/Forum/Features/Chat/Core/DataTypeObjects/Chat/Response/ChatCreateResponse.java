package Forum.Features.Chat.Core.DataTypeObjects.Chat.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatCreateResponse {
    private UUID id;
    private UUID forumId;
    private String userEmail;
    private String prompt;
    private String response;
    private LocalDate created;
    private Long upvotes;
    private Long downvotes;
    private Long comments;
}
