package Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class AddStarRequest {
    private UUID forumId;
    private String userEmail;
}
