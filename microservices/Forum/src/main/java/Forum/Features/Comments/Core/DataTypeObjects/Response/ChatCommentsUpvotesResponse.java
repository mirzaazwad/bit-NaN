package Forum.Features.Comments.Core.DataTypeObjects.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ChatCommentsUpvotesResponse {
    private UUID id;
    private UUID commentId;
    private String userEmail;
    private LocalDate created;
}
