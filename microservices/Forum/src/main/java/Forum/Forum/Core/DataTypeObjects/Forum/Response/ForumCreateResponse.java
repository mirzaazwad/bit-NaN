package Forum.Forum.Core.DataTypeObjects.Forum.Response;

import Forum.Forum.Core.Enums.ForumType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ForumCreateResponse {
    private String id;
    private String title;
    private String description;
    private LocalDate created;
    private Long stars;
    private Long reviews;
    private String userEmail;
    private ForumType type;
}
