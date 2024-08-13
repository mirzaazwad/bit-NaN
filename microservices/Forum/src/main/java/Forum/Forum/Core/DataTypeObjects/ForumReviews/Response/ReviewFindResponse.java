package Forum.Forum.Core.DataTypeObjects.ForumReviews.Response;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ReviewFindResponse {
    private String id;
    private String forumId;
    private String review;
    private LocalDate created;
    private LocalDate modified;
    private String userEmail;
}
