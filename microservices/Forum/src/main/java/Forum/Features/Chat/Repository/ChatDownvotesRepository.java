package Forum.Features.Chat.Repository;

import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvotesFindResponse;
import Forum.Features.Chat.Model.ChatDownvotesEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ChatDownvotesRepository extends ReactiveCrudRepository<ChatDownvotesEntity,String> {
    @NonNull
    @Query("select " +
            "chat_downvotes.id, chat_downvotes.chat_id," +
            "chat_downvotes.created, chat_downvotes.user_email "+
            "FROM public.chat_downvotes AS chat_downvotes WHERE chat_downvotes.id=CAST($1 AS UUID)")
    Mono<ChatDownvotesFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_downvotes.id, chat_downvotes.chat_id," +
            "chat_downvotes.created, chat_downvotes.user_email "+
            "FROM public.chat_downvotes AS chat_downvotes WHERE chat_downvotes.id=CAST($1 AS UUID)")
    Mono<ChatDownvotesEntity> findById(@NonNull UUID id);

    @NonNull
    @Query("select " +
            "chat_downvotes.id, chat_downvotes.chat_id," +
            "chat_downvotes.created, chat_downvotes.user_email "+
            "FROM public.chat_downvotes AS chat_downvotes WHERE chat_downvotes.chat_id=CAST($1 AS UUID)")
    Flux<ChatDownvotesFindResponse> findAllSelected(String id);

    @NonNull
    @Query(
            "select " +
                    "chat_downvotes.id, chat_downvotes.chat_id," +
                    "chat_downvotes.created, chat_downvotes.user_email "+
                    "FROM public.chat_downvotes AS chat_downvotes WHERE chat_downvotes.chat_id=CAST($1 AS UUID) AND chat_downvotes.user_email=$2"
    )
    Mono<ChatDownvotesEntity> findByChatIdAndUserEmail(@NonNull UUID chatId, @NonNull String userId);
}
