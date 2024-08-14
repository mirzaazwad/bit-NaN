package Forum.Features.Comments.Repository;

import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentsDownvotesResponse;
import Forum.Features.Comments.Model.ChatCommentsDownvoteEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ChatCommentDownvoteRepository extends ReactiveCrudRepository<ChatCommentsDownvoteEntity,String> {
    @NonNull
    @Query("select " +
            "chat_comment_downvotes.id, chat_comment_downvotes.comment_id," +
            "chat_comment_downvotes.created, chat_comment_downvotes.user_email "+
            "FROM public.chat_comment_downvotes AS chat_comment_downvotes WHERE chat_comment_downvotes.id=CAST($1 AS UUID)")
    Mono<ChatCommentsDownvotesResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_comment_downvotes.id, chat_comment_downvotes.comment_id," +
            "chat_comment_downvotes.created, chat_comment_downvotes.user_email "+
            "FROM public.chat_comment_downvotes AS chat_comment_downvotes WHERE chat_comment_downvotes.comment_id=CAST($1 AS UUID)")
    Flux<ChatCommentsDownvotesResponse> findAllSelected(String id);
}
