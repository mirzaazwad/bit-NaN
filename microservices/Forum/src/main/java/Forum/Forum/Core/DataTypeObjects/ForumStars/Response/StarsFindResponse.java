package Forum.Forum.Core.DataTypeObjects.ForumStars.Response;

import lombok.Data;

import java.time.LocalDate;

@Data
public class StarsFindResponse {
    private String id;
    private String forumId;
    private LocalDate created;
    private LocalDate modified;
    private String userEmail;
}
