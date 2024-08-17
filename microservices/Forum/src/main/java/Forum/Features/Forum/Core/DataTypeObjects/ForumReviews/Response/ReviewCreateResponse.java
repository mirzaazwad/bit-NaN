package Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@Builder
public class ReviewCreateResponse {
    private UUID id;
    private String forumId;
    private String review;
    private String email;
    private LocalDate created;
}
