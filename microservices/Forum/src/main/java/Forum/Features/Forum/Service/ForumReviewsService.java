package Forum.Features.Forum.Service;

import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request.AddReviewRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request.DeleteReviewRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Request.UpdateReviewRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response.ReviewCreateResponse;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response.ReviewDeleteResponse;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response.ReviewFindResponse;
import Forum.Features.Forum.Core.DataTypeObjects.ForumReviews.Response.ReviewUpdateResponse;
import Forum.Features.Forum.Model.ForumReviewsEntity;
import Forum.Features.Forum.Repository.ForumRepository;
import Forum.Features.Forum.Repository.ForumReviewsRepository;
import Forum.Lib.Reusables;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ForumReviewsService {

    private final ForumReviewsRepository forumReviewsRepository;
    private final ForumRepository forumRepository;

    public Mono<ReviewCreateResponse> addReview(AddReviewRequest request){
        return forumReviewsRepository.save(
                ForumReviewsEntity.builder()
                        .forumId(request.getForumId())
                        .userEmail(Reusables.getCurrentUsername())
                        .review(request.getReview())
                        .created(LocalDate.now())
                        .modified(LocalDate.now())
                        .isRemoved(false)
                        .build()
        ).flatMap(forumReviewsEntity -> forumRepository.findById(forumReviewsEntity.getForumId())
                .flatMap(forumEntity -> {
                    forumEntity.setReviews(forumEntity.getReviews() + 1);
                    return forumRepository.save(forumEntity);
                }).then(Mono.just(ReviewCreateResponse.builder()
                                .id(forumReviewsEntity.getId())
                                .userEmail(forumReviewsEntity.getUserEmail())
                                .created(forumReviewsEntity.getCreated())
                                .forumId(forumReviewsEntity.getForumId().toString())
                                .review(forumReviewsEntity.getReview())
                                .build())));
    }

    public Mono<ReviewDeleteResponse> deleteReview(DeleteReviewRequest request) {
        String currentUserEmail = Reusables.getCurrentUsername();
        return forumReviewsRepository.findById(request.getId())
                .flatMap(existingForumReview -> {
                    if(existingForumReview.getUserEmail().equals(currentUserEmail)){
                        existingForumReview.setIsRemoved(true);
                    }
                    else{
                        return Mono.error(new RuntimeException("User Does not have permission to delete this review"));
                    }
                    return forumReviewsRepository.save(existingForumReview)
                            .flatMap(forumReviewsEntity -> forumRepository.findById(forumReviewsEntity.getForumId())
                                    .flatMap(forumEntity -> {
                                        forumEntity.setReviews(forumEntity.getReviews() - 1);
                                        return forumRepository.save(forumEntity)
                                                .then(Mono.just(ReviewDeleteResponse.builder().success(true).build()));
                                    }));
                });
    }

    public Mono<ReviewUpdateResponse> updateReview(UpdateReviewRequest request){
        String currentUserEmail = Reusables.getCurrentUsername();
        return forumReviewsRepository.findById(request.getId())
                .flatMap(existingForumReview->{
                    if(existingForumReview.getUserEmail().equals(currentUserEmail)){
                        existingForumReview.setReview(request.getReview());
                    }
                    else{
                        return Mono.error(new RuntimeException("User Does not have permission to edit this review"));
                    }
                    return forumReviewsRepository.save(existingForumReview)
                            .map(forumReviewsEntity -> ReviewUpdateResponse.builder()
                                    .id(forumReviewsEntity.getId())
                                    .userEmail(forumReviewsEntity.getUserEmail())
                                    .created(forumReviewsEntity.getCreated())
                                    .modified(forumReviewsEntity.getModified())
                                    .forumId(forumReviewsEntity.getForumId())
                                    .review(forumReviewsEntity.getReview())
                                    .build());
                });
    }

    public Flux<ReviewFindResponse> getAllReviewsForForum(String forumId){
        return forumReviewsRepository.findAllSelected(forumId);
    }

    public Mono<ReviewFindResponse> getReview(String id){
        return forumReviewsRepository.findOneById(id);
    }
}
