package Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class StarCreateResponse {
    private String id;
    private String forumId;
    private String userEmail;
    private LocalDate created;
}
