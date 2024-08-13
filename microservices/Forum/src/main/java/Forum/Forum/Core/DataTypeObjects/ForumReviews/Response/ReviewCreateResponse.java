package Forum.Forum.Core.DataTypeObjects.ForumReviews.Response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@Builder
public class ReviewCreateResponse {
    private String id;
    private String forumId;
    private String review;
    private String email;
    private LocalDate created;
}
