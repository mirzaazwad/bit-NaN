package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class DeleteReviewRequest {
    private UUID id;
}
