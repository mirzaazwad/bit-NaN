package Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatDownvoteCreateResponse {
    private UUID id;
    private UUID chatId;
    private String userEmail;
    private LocalDate created;
}
