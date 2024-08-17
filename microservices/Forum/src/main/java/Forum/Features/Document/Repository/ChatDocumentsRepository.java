package Forum.Features.Document.Repository;

import Forum.Features.Document.Core.DataTypeObjects.Response.ChatDocumentFindResponse;
import Forum.Features.Document.Model.ChatDocumentsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ChatDocumentsRepository extends ReactiveCrudRepository<ChatDocumentsEntity,String> {
    @NonNull
    @Query("select " +
            "chat_documents.id, chat_documents.chat_id," +
            "chat_documents.created, chat_documents.url, chat_documents.user_email "+
            "FROM public.chat_documents AS chat_documents WHERE chat_documents.chat_id=CAST($1 AS UUID) AND chat_documents.is_removed=false LIMIT 1")
    Mono<ChatDocumentFindResponse> findOneById(@NonNull UUID id);

    @NonNull
    @Query("select " +
            "chat_documents.id, chat_documents.chat_id," +
            "chat_documents.created, chat_documents.url, chat_documents.user_email "+
            "FROM public.chat_documents AS chat_documents WHERE chat_documents.chat_id=CAST($1 AS UUID) AND  chat_documents.is_removed=false")
    Flux<ChatDocumentFindResponse> findAllSelected(String id);

    @NonNull
    @Query("select " +
            "chat_documents.id, chat_documents.url, chat_documents.chat_id," +
            "chat_documents.created,  chat_documents.user_email, chat_documents.is_removed " +
            "FROM public.chat_documents AS chat_documents WHERE chat_documents.id=CAST($1 AS UUID) AND chat_documents.is_removed=false")
    Mono<ChatDocumentsEntity> findById(@NonNull UUID id);
}