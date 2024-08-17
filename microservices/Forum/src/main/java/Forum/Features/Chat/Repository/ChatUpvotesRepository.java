package Forum.Features.Chat.Repository;

import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvotesFindResponse;
import Forum.Features.Chat.Model.ChatUpvotesEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ChatUpvotesRepository extends ReactiveCrudRepository<ChatUpvotesEntity,String> {
    @NonNull
    @Query("select " +
            "chat_upvotes.id, chat_upvotes.chat_id," +
            "chat_upvotes.created, chat_upvotes.user_email "+
            "FROM public.chat_upvotes AS chat_upvotes WHERE chat_upvotes.id=CAST($1 AS UUID)")
    Mono<ChatUpvotesFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_upvotes.id, chat_upvotes.chat_id," +
            "chat_upvotes.created, chat_upvotes.user_email "+
            "FROM public.chat_upvotes AS chat_upvotes WHERE chat_upvotes.id=CAST($1 AS UUID)")
    Mono<ChatUpvotesEntity> findById(@NonNull UUID id);

    @NonNull
    @Query("select " +
            "chat_upvotes.id, chat_upvotes.chat_id," +
            "chat_upvotes.created, chat_upvotes.user_email "+
            "FROM public.chat_upvotes AS chat_upvotes WHERE chat_upvotes.chat_id=CAST($1 AS UUID)")
    Flux<ChatUpvotesFindResponse> findAllSelected(String id);

    @NonNull
    @Query(
            "select " +
                    "chat_upvotes.id, chat_upvotes.chat_id," +
                    "chat_upvotes.created, chat_upvotes.user_email "+
                    "FROM public.chat_upvotes AS chat_upvotes WHERE chat_upvotes.chat_id=CAST($1 AS UUID) AND chat_upvotes.user_email=$2"
    )
    Mono<ChatUpvotesEntity> findByChatIdAndUserEmail(@NonNull UUID chatId, @NonNull String userId);
}
