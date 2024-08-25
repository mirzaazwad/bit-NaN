package Forum.Features.Forum.Repository;

import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response.ReviewFindResponse;
import Forum.Features.Forum.Model.ForumReviewsEntity;
import lombok.NonNull;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface ForumReviewsRepository extends ReactiveCrudRepository<ForumReviewsEntity,String> {
    @NonNull
    @Query("select " +
            "forum_reviews.id, forum_reviews.review, forum_reviews.forum_id," +
            "forum_reviews.created, forum_reviews.modified, forum_reviews.user_email "+
            "FROM public.forum_reviews AS forum_reviews WHERE forum_reviews.id=CAST($1 AS UUID) AND forum_reviews.is_removed=false")
    Mono<ReviewFindResponse> findOneById(@NonNull String id);

    @NonNull
    @Query("select " +
            "forum_reviews.id, forum_reviews.review, forum_reviews.forum_id," +
            "forum_reviews.created, forum_reviews.modified, forum_reviews.user_email, forum_reviews.is_removed "+
            "FROM public.forum_reviews AS forum_reviews WHERE forum_reviews.id=CAST($1 AS UUID) AND forum_reviews.is_removed=false")
    Mono<ForumReviewsEntity> findById(@NonNull UUID id);

    @NonNull
    @Query("select " +
            "forum_reviews.id, forum_reviews.review, forum_reviews.forum_id," +
            "forum_reviews.created, forum_reviews.modified, forum_reviews.user_email "+
            "FROM public.forum_reviews AS forum_reviews WHERE forum_reviews.forum_id=CAST($1 AS UUID) AND  forum_reviews.is_removed=false ORDER BY forum_reviews.modified DESC")
    Flux<ReviewFindResponse> findAllSelected(String id);
}
