package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response;

import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class ReviewFindResponse {
    private UUID id;
    private UUID forumId;
    private String review;
    private LocalDate created;
    private LocalDate modified;
    private String userEmail;
}
