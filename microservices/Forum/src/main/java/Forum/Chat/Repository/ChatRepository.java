package Forum.Chat.Repository;

import Forum.Chat.Core.DataTypeObjects.ChatFindResponse;
import Forum.Forum.Model.ForumReviewsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ChatRepository extends ReactiveCrudRepository<ForumReviewsEntity,String> {
    @NonNull
    @Query("select " +
            "chat.id, chat.prompt, chat.forum_id," +
            "chat.created, chat.response, chat.user_email," +
            "chat.upvotes, chat.downvotes, chat.comments "+
            "FROM public.chat AS chat WHERE chat.id=CAST($1 AS UUID) AND chat.is_removed=false")
    Mono<ChatFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "chat.id, chat.prompt, chat.forum_id," +
            "chat.created, chat.response, chat.user_email," +
            "chat.upvotes, chat.downvotes, chat.comments "+
            "FROM public.chat AS chat WHERE chat.forum_id=CAST($1 AS UUID) AND  chat.is_removed=false")
    Flux<ChatFindResponse> findAllSelected(String id);
}
