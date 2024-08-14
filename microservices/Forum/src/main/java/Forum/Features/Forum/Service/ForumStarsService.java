package Forum.Features.Forum.Service;

import Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Request.AddStarRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Request.DeleteStarRequest;
import Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response.StarCreateResponse;
import Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response.StarDeleteResponse;
import Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response.StarsFindResponse;
import Forum.Features.Forum.Model.ForumStarsEntity;
import Forum.Features.Forum.Repository.ForumRepository;
import Forum.Features.Forum.Repository.ForumStarsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ForumStarsService {

    private final ForumStarsRepository forumStarsRepository;
    private final ForumRepository forumRepository;

    public Mono<StarCreateResponse> addStar(AddStarRequest request) {
        return forumStarsRepository.save(
                ForumStarsEntity.builder()
                        .forumId(UUID.fromString(request.getForumId()))
                        .userEmail(request.getUserEmail())
                        .created(LocalDate.now())
                        .modified(LocalDate.now())
                        .build()
        ).flatMap(forumStarsEntity -> forumRepository.findById(forumStarsEntity.getForumId().toString())
                .flatMap(forumEntity -> {
                    forumEntity.setStars(forumEntity.getStars() + 1);
                    return forumRepository.save(forumEntity);
                }).then(Mono.just(StarCreateResponse.builder()
                        .id(forumStarsEntity.getId().toString())
                        .forumId(forumStarsEntity.getForumId().toString())
                        .userEmail(forumStarsEntity.getUserEmail())
                        .created(forumStarsEntity.getCreated())
                        .build())));
    }

    public Mono<StarDeleteResponse> deleteStar(DeleteStarRequest request) {
        return forumStarsRepository.findById(request.getId())
                .flatMap(existingStar -> forumStarsRepository.delete(existingStar)
                        .then(forumRepository.findById(existingStar.getForumId().toString()))
                        .flatMap(forumEntity -> {
                            forumEntity.setStars(forumEntity.getStars() - 1);
                            return forumRepository.save(forumEntity);
                        })
                        .then(Mono.just(StarDeleteResponse.builder().success(true).build()))
                );
    }

    public Flux<StarsFindResponse> getAllStarsForForum(String forumId) {
        return forumStarsRepository.findAllSelected(forumId);
    }

    public Mono<StarsFindResponse> getStar(String id) {
        return forumStarsRepository.findOneById(id);
    }
}
