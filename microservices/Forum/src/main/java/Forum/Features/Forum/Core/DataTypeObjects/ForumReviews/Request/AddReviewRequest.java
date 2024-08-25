package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class AddReviewRequest {
    private UUID forumId;
    private String review;
}
