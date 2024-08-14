package Forum.Features.Chat.Repository;

import Forum.Features.Chat.Core.DataTypeObjects.Response.ChatDownvotesResponse;
import Forum.Features.Chat.Model.ChatDownvotesEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ChatDownvotesRepository extends ReactiveCrudRepository<ChatDownvotesEntity,String> {
    @NonNull
    @Query("select " +
            "chat_downvotes.id, chat_downvotes.chat_id," +
            "chat_downvotes.created, chat_downvotes.user_email "+
            "FROM public.chat_downvotes AS chat_downvotes WHERE chat_downvotes.id=CAST($1 AS UUID)")
    Mono<ChatDownvotesResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_downvotes.id, chat_downvotes.chat_id," +
            "chat_downvotes.created, chat_downvotes.user_email "+
            "FROM public.chat_downvotes AS chat_downvotes WHERE chat_downvotes.chat_id=CAST($1 AS UUID)")
    Flux<ChatDownvotesResponse> findAllSelected(String id);
}
