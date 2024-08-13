package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
public class ReviewUpdateResponse {
    private String id;
    private String forumId;
    private String review;
    private String email;
    private LocalDate created;
    private LocalDate modified;
}
