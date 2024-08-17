package Forum.Features.Document.Core.DataTypeObjects.Response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@Builder
public class AddDocumentResponse {
    private UUID id;
    private UUID chatId;
    private String url;
    private String userEmail;
    private LocalDate created;
}
