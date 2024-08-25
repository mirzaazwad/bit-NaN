package Forum.Features.Document.Core.DataTypeObjects.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ChatDocumentFindResponse {
    private String id;
    private String forumId;
    private String userEmail;
    private String url;
    private LocalDate created;
}
