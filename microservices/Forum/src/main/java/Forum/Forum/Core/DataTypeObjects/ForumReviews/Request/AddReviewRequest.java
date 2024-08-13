package Forum.Forum.Core.DataTypeObjects.ForumReviews.Request;

import lombok.Data;

@Data
public class AddReviewRequest {
    private String id;
    private String userEmail;
    private String review;
}
