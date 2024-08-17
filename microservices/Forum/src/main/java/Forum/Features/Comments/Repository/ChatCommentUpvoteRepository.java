package Forum.Features.Comments.Repository;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteFindResponse;
import Forum.Features.Comments.Model.ChatCommentsUpvotesEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ChatCommentUpvoteRepository extends ReactiveCrudRepository<ChatCommentsUpvotesEntity,String> {
    @NonNull
    @Query("select " +
            "chat_comment_upvotes.id, chat_comment_upvotes.comment_id," +
            "chat_comment_upvotes.created, chat_comment_upvotes.user_email "+
            "FROM public.chat_comment_upvotes AS chat_comment_upvotes WHERE chat_comment_upvotes.id=CAST($1 AS UUID)")
    Mono<ChatCommentUpvoteFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_comment_upvotes.id, chat_comment_upvotes.comment_id," +
            "chat_comment_upvotes.created, chat_comment_upvotes.user_email "+
            "FROM public.chat_comment_upvotes AS chat_comment_upvotes WHERE chat_comment_upvotes.comment_id=CAST($1 AS UUID)")
    Flux<ChatCommentUpvoteFindResponse> findAllSelected(String id);

    @NonNull
    @Query("select " +
            "chat_comment_upvotes.id, chat_comment_upvotes.comment_id," +
            "chat_comment_upvotes.created, chat_comment_upvotes.user_email "+
            "FROM public.chat_comment_upvotes AS chat_comment_upvotes WHERE chat_comment_upvotes.id=CAST($1 AS UUID)")
    Mono<ChatCommentsUpvotesEntity> findById(@NonNull UUID id);

    @NonNull
    @Query(
            "select " +
                    "chat_comment_upvotes.id, chat_comment_upvotes.comment_id," +
                    "chat_comment_upvotes.created, chat_comment_upvotes.user_email "+
                    "FROM public.chat_comment_upvotes AS chat_comment_upvotes WHERE chat_comment_upvotes.comment_id=CAST($1 AS UUID) AND chat_comment_upvotes.user_email=$2"
    )
    Mono<ChatCommentsUpvotesEntity> findByCommentIdAndUserEmail(@NonNull UUID chatId, @NonNull String userId);
    
}