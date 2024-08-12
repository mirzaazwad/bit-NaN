package Forum.Forum.Core.DataTypeObjects.ForumReviews;

import lombok.Data;

import java.util.UUID;

@Data
public class AddReviewRequest {
    private String id;
    private String userEmail;
    private String review;
}
