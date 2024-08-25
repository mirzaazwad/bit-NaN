package Forum.Features.Document.Service;


import Forum.Features.Document.Core.DataTypeObjects.Request.AddDocumentRequest;
import Forum.Features.Document.Core.DataTypeObjects.Response.AddDocumentResponse;
import Forum.Features.Document.Core.DataTypeObjects.Response.ChatDocumentFindResponse;
import Forum.Features.Document.Model.ChatDocumentsEntity;
import Forum.Features.Document.Repository.ChatDocumentsRepository;
import Forum.Lib.Reusables;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ChatDocumentService {

    private final ChatDocumentsRepository chatDocumentsRepository;

    public Mono<AddDocumentResponse> saveDocument(AddDocumentRequest request){
        String user = Reusables.getCurrentUsername();
        return chatDocumentsRepository.save(
                ChatDocumentsEntity.builder()
                        .forumId(request.getForumId())
                        .userEmail(user)
                        .url(request.getUrl())
                        .created(LocalDate.now())
                        .isRemoved(false)
                        .build()
        ).map(chatDocumentsEntity -> AddDocumentResponse.builder()
                .id(chatDocumentsEntity.getId())
                .forumId(chatDocumentsEntity.getForumId())
                .created(chatDocumentsEntity.getCreated())
                .userEmail(chatDocumentsEntity.getUserEmail())
                .url(chatDocumentsEntity.getUrl())
                .build()
        );
    }

    public Mono<ChatDocumentFindResponse> getDocument(UUID chatId){
        return chatDocumentsRepository.findOneById(chatId);
    }
}
