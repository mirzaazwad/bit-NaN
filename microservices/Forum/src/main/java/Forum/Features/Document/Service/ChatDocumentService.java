package Forum.Features.Document.Service;


import Forum.Features.Document.Core.DataTypeObjects.Request.AddDocumentRequest;
import Forum.Features.Document.Core.DataTypeObjects.Response.AddDocumentResponse;
import Forum.Features.Document.Core.Utils.FileService;
import Forum.Features.Document.Model.ChatDocumentsEntity;
import Forum.Features.Document.Repository.ChatDocumentsRepository;
import Forum.Lib.Reusables;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

@Service
@RequiredArgsConstructor
public class ChatDocumentService extends FileService {

    private final ChatDocumentsRepository chatDocumentsRepository;

    public Mono<AddDocumentResponse> saveDocument(AddDocumentRequest request) throws Exception{
        try{
            String user = Reusables.getCurrentUsername();
            var uploadResult = this.uploadFile(request.getFile());
            String createdAtString = (String) uploadResult.get("created_at");
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");
            LocalDate createdAt = LocalDate.parse(createdAtString,formatter);
            System.out.println("Comes Here");
            System.out.println(request);
            return chatDocumentsRepository.save(
                    ChatDocumentsEntity.builder()
                            .chatId(request.getChatId())
                            .userEmail(user)
                            .filename(request.getFile().getOriginalFilename())
                            .url((String) uploadResult.get("url"))
                            .created(createdAt)
                            .isRemoved(false)
                            .build()
            ).map(chatDocumentsEntity -> AddDocumentResponse.builder()
                    .chatId(chatDocumentsEntity.getChatId())
                    .created(chatDocumentsEntity.getCreated())
                    .userEmail(chatDocumentsEntity.getUserEmail())
                    .filename(chatDocumentsEntity.getFilename())
                    .url(chatDocumentsEntity.getUrl())
                    .build()
            );
        } catch (DateTimeParseException e) {
            System.out.println(e.getMessage());
            throw new Exception("Error parsing created_at date from upload result: " + e.getMessage(), e);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new Exception("Error saving file information to database: " + e.getMessage(), e);
        }
    }
}
