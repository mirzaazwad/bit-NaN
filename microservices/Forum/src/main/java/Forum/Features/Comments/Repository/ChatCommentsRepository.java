package Forum.Features.Comments.Repository;

import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentsFindResponse;
import Forum.Features.Comments.Model.ChatCommentsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ChatCommentsRepository extends ReactiveCrudRepository<ChatCommentsEntity,String> {
    @NonNull
    @Query("select " +
            "chat_comments.id, chat_comments.comment, chat_comments.chat_id," +
            "chat_comments.created, chat_comments.modified, chat_comments.user_email," +
            "chat_comments.upvotes, chat_comments.downvotes "+
            "FROM public.chat_comments AS chat_comments WHERE chat_comments.id=CAST($1 AS UUID) AND chat_comments.is_removed=false")
    Mono<ChatCommentsFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat_comments.id, chat_comments.comment, chat_comments.chat_id," +
            "chat_comments.created, chat_comments.modified, chat_comments.user_email," +
            "chat_comments.upvotes, chat_comments.downvotes "+
            "FROM public.chat_comments AS chat_comments WHERE chat_comments.chat_id=CAST($1 AS UUID) AND  chat_comments.is_removed=false")
    Flux<ChatCommentsFindResponse> findAllSelected(String id);

    @NonNull
    @Query("select " +
            "chat_comments.id, chat_comments.comment, chat_comments.chat_id," +
            "chat_comments.created, chat_comments.modified, chat_comments.user_email, chat_comments.is_removed," +
            "chat_comments.upvotes, chat_comments.downvotes "+
            "FROM public.chat_comments AS chat_comments WHERE chat_comments.id=CAST($1 AS UUID) AND chat_comments.is_removed=false")
    Mono<ChatCommentsEntity> findById(@NonNull UUID id);
}