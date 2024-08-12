package Forum.Forum.Repository;

import Forum.Forum.Core.DataTypeObjects.Forum.ForumFindResponse;
import Forum.Forum.Model.ForumEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ForumRepository extends ReactiveCrudRepository<ForumEntity,String> {
    @NonNull
    @Query("select " +
            "forum.id, forum.title, forum.description, " +
            "forum.created, forum.modified, forum.stars, " +
            "forum.reviews, forum.user_email, forum.type " +
            "FROM public.forum AS forum WHERE forum.id=CAST($1 AS UUID) AND forum.is_removed=false")
    Mono<ForumFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "forum.id, forum.title, forum.description, " +
            "forum.created, forum.modified, forum.stars, " +
            "forum.reviews, forum.user_email, forum.type " +
            "FROM public.forum AS forum WHERE forum.is_removed=false")
    Flux<ForumFindResponse> findAllSelected();
}
