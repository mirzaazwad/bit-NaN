package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ReviewDeleteResponse {
    private Boolean success;
}
