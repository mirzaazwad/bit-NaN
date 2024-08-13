package Forum.Features.Chat.Core.DataTypeObjects.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ChatUpvotesResponse {
    private String id;
    private String chatId;
    private String userEmail;
    private LocalDate created;
}
