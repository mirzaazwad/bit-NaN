package Forum.Features.Chat.Repository;

import Forum.Features.Chat.Core.DataTypeObjects.Response.ChatUpvotesResponse;
import Forum.Features.Chat.Model.ChatUpvotesEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ChatUpvotesRepository extends ReactiveCrudRepository<ChatUpvotesEntity,String> {
    @NonNull
    @Query("select " +
            "chat_upvotes.id, chat_upvotes.chat_id," +
            "chat_upvotes.created, chat_upvotes.user_email "+
            "FROM public.chat_upvotes AS chat_upvotes WHERE chat_upvotes.id=CAST($1 AS UUID)")
    Mono<ChatUpvotesResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_upvotes.id, chat_upvotes.chat_id," +
            "chat_upvotes.created, chat_upvotes.user_email "+
            "FROM public.chat_upvotes AS chat_upvotes WHERE chat_upvotes.chat_id=CAST($1 AS UUID)")
    Flux<ChatUpvotesResponse> findAllSelected(String id);
}
