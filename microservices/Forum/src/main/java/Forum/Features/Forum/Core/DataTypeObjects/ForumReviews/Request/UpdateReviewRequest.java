package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request;

import lombok.Data;

@Data
public class UpdateReviewRequest {
    private String id;
    private String review;
}
