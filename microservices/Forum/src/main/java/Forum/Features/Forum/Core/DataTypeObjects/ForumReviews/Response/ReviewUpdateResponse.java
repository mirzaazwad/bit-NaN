package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class ReviewUpdateResponse {
    private UUID id;
    private UUID forumId;
    private String review;
    private String email;
    private LocalDate created;
    private LocalDate modified;
}
