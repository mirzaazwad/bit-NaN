package Forum.Chat.Repository;

import Forum.Forum.Core.DataTypeObjects.ForumReviews.Response.ReviewFindResponse;
import Forum.Forum.Model.ForumReviewsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ChatCommentsRepository extends ReactiveCrudRepository<ForumReviewsEntity,String> {
    @NonNull
    @Query("select " +
            "chat_comments.id, chat_comments.comment, chat_comments.chat_id," +
            "chat_comments.created, chat_comments.modified, chat_comments.user_email "+
            "FROM public.chat_comments AS chat_comments WHERE chat_comments.id=CAST($1 AS UUID) AND chat_comments.is_removed=false")
    Mono<ReviewFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_comments.id, chat_comments.comment, chat_comments.chat_id," +
            "chat_comments.created, chat_comments.modified, chat_comments.user_email "+
            "FROM public.chat_comments AS chat_comments WHERE chat_comments.chat_id=CAST($1 AS UUID) AND  chat_comments.is_removed=false")
    Flux<ReviewFindResponse> findAllSelected(String id);
}