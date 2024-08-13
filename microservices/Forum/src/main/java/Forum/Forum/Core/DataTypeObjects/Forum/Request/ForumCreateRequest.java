package Forum.Forum.Core.DataTypeObjects.Forum.Request;

import Forum.Forum.Core.Enums.ForumType;
import lombok.Data;

@Data
public class ForumCreateRequest {
    private String title;
    private String description;
    private String userEmail;
    private ForumType forumType;
}
