package Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class StarCreateResponse {
    private UUID id;
    private UUID forumId;
    private String userEmail;
    private LocalDate created;
}
