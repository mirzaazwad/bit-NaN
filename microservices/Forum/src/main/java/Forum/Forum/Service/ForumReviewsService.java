package Forum.Forum.Service;

import Forum.Forum.Core.DataTypeObjects.ForumReviews.AddReviewRequest;
import Forum.Forum.Model.ForumEntity;
import Forum.Forum.Model.ForumReviewsEntity;
import Forum.Forum.Repository.ForumRepository;
import Forum.Forum.Repository.ForumReviewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ForumReviewsService {

    private final ForumReviewsRepository forumReviewsRepository;
    private final ForumRepository forumRepository;

    public Mono<ForumReviewsEntity> addReview(AddReviewRequest request){
        return forumReviewsRepository.save(
                ForumReviewsEntity.builder()
                        .forumId(UUID.fromString(request.getId()))
                        .userEmail(request.getUserEmail())
                        .review(request.getReview())
                        .created(LocalDate.now())
                        .modified(LocalDate.now())
                        .isRemoved(false)
                        .build()
        ).flatMap(forumReviewsEntity -> forumRepository.findById(request.getId())
                .flatMap(forumEntity -> {
                    forumEntity.setReviews(forumEntity.getReviews() + 1);
                    return forumRepository.save(forumEntity);
                }).then(Mono.just(forumReviewsEntity)));
    }
}
