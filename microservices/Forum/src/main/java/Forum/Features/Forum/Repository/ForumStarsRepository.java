package Forum.Features.Forum.Repository;

import Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response.StarsFindResponse;
import Forum.Features.Forum.Model.ForumStarsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ForumStarsRepository extends ReactiveCrudRepository<ForumStarsEntity,String> {
    @NonNull
    @Query("select " +
            "forum_stars.id, forum_stars.forum_id," +
            "forum_stars.created, forum_stars.modified, forum_stars.user_email "+
            "FROM public.forum_stars AS forum_stars WHERE forum_stars.id=CAST($1 AS UUID)")
    Mono<StarsFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "forum_stars.id, forum_stars.forum_id," +
            "forum_stars.created, forum_stars.modified, forum_stars.user_email "+
            "FROM public.forum_stars AS forum_stars WHERE forum_stars.id=CAST($1 AS UUID)")
    Mono<ForumStarsEntity> findById(@NonNull UUID id);

    @NonNull
    @Query("select " +
            "forum_stars.id, forum_stars.forum_id," +
            "forum_stars.created, forum_stars.modified, forum_stars.user_email "+
            "FROM public.forum_stars AS forum_stars WHERE forum_stars.forum_id=CAST($1 AS UUID)")
    Flux<StarsFindResponse> findAllSelected(String id);

    @NonNull
    @Query("select forum_stars.id FROM public.forum_stars AS forum_stars WHERE forum_stars.user_email=$1 AND forum_stars.forum_id=$2 LIMIT 1")
    Mono<StarsFindResponse> findByEmailAndForumId(@NonNull String userEmail, @NonNull String forumId);
}
