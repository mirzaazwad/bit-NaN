package Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response;

import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class StarsFindResponse {
    private UUID id;
    private UUID forumId;
    private LocalDate created;
    private LocalDate modified;
    private String userEmail;
}
