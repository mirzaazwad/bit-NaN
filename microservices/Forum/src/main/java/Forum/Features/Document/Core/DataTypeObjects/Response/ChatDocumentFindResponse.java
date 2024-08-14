package Forum.Features.Document.Core.DataTypeObjects.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ChatDocumentFindResponse {
    private String id;
    private String chatId;
    private String userEmail;
    private String document;
    private LocalDate created;
}
