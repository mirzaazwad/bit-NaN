package Forum.Features.Document.Core.DataTypeObjects.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddDocumentRequest {
    private MultipartFile file;
    private UUID chatId;
}



