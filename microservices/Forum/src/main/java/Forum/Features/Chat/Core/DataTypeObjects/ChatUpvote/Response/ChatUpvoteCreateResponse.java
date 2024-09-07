package Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatUpvoteCreateResponse {
    private UUID id;
    private UUID chatId;
    private String userEmail;
    private LocalDate created;
}
