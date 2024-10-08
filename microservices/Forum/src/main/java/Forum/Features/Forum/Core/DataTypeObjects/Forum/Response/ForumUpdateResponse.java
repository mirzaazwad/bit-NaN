package Forum.Features.Forum.Core.DataTypeObjects.Forum.Response;

import Forum.Features.Forum.Core.Enums.ForumType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class ForumUpdateResponse {
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
