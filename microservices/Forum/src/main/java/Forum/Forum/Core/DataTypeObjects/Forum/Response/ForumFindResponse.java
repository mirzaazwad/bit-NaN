package Forum.Forum.Core.DataTypeObjects.Forum.Response;

import Forum.Forum.Core.Enums.ForumType;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class ForumFindResponse {
    private UUID id;
    private String title;
    private String description;
    private LocalDate created;
    private LocalDate modified;
    private Long stars;
    private Long reviews;
    private String userEmail;
    private ForumType type;
}
