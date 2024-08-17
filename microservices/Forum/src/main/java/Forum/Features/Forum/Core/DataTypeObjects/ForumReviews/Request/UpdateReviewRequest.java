package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class UpdateReviewRequest {
    private UUID id;
    private String review;
}
