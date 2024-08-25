package Forum.Features.Forum.Repository;

import Forum.Features.Forum.Core.DataTypeObjects.Forum.Response.ForumFindResponse;
import Forum.Features.Forum.Model.ForumEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

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
            "forum.reviews, forum.user_email, forum.type, forum.is_removed " +
            "FROM public.forum AS forum WHERE forum.id=CAST($1 AS UUID) AND forum.is_removed=false")
    Mono<ForumEntity> findById(@NonNull UUID id);

    @NonNull
    @Query("select " +
            "forum.id, forum.title, forum.description, " +
            "forum.created, forum.modified, forum.stars, " +
            "forum.reviews, forum.user_email, forum.type " +
            "FROM public.forum AS forum WHERE forum.is_removed=false ORDER BY forum.modified DESC ")
    Flux<ForumFindResponse> findAllSelected();
}
