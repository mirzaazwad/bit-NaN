package Forum.Forum.Core.DataTypeObjects.Forum.Request;
import lombok.Data;

@Data
public class ForumUpdateRequest {
    private String id;
    private String title;
    private String description;
}
