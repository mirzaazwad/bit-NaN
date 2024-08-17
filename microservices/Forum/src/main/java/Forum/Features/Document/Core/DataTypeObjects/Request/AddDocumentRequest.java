package Forum.Features.Document.Core.DataTypeObjects.Request;

import lombok.Data;

import java.util.UUID;

@Data
public class AddDocumentRequest {
    private String url;
    private UUID chatId;
}
