package Forum.Forum.Core.DataTypeObjects.ForumStars.Request;

import lombok.Data;

@Data
public class AddStarRequest {
    private String forumId;
    private String userEmail;
}
