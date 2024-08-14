package Forum.Features.Document.Repository;

import Forum.Features.Document.Core.DataTypeObjects.Response.ChatDocumentFindResponse;
import Forum.Features.Document.Model.ChatDocumentsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ChatDocumentsRepository extends ReactiveCrudRepository<ChatDocumentsEntity,String> {
    @NonNull
    @Query("select " +
            "chat_documents.id, chat_documents.chat_id," +
            "chat_documents.created, chat_documents.document, chat_documents.user_email "+
            "FROM public.chat_documents AS chat_documents WHERE chat_documents.id=CAST($1 AS UUID) AND chat_documents.is_removed=false")
    Mono<ChatDocumentFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_documents.id, chat_documents.chat_id," +
            "chat_documents.created, chat_documents.document, chat_documents.user_email "+
            "FROM public.chat_documents AS chat_documents WHERE chat_documents.chat_id=CAST($1 AS UUID) AND  chat_documents.is_removed=false")
    Flux<ChatDocumentFindResponse> findAllSelected(String id);
}