package Forum.Features.Forum.Service;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Request.ForumCreateRequest;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Request.ForumDeleteRequest;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Request.ForumUpdateRequest;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Response.ForumCreateResponse;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Response.ForumDeleteResponse;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Response.ForumFindResponse;
import Forum.Features.Forum.Core.DataTypeObjects.Forum.Response.ForumUpdateResponse;
import Forum.Features.Forum.Model.ForumEntity;
import Forum.Features.Forum.Repository.ForumRepository;
import Forum.Lib.Reusables;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ForumService {

    private final ForumRepository forumRepository;

    public Mono<ForumCreateResponse> create(ForumCreateRequest request) {
        return forumRepository.save(
                ForumEntity.builder()
                        .title(request.getTitle())
                        .description(request.getDescription())
                        .type(request.getForumType())
                        .stars(0L)
                        .reviews(0L)
                        .created(LocalDate.now())
                        .modified(LocalDate.now())
                        .userEmail(Reusables.getCurrentUsername())
                        .isRemoved(false)
                        .build()
        ).map(forumEntity -> ForumCreateResponse.builder()
                .id(forumEntity.getId())
                .title(forumEntity.getTitle())
                .description(forumEntity.getDescription())
                .type(forumEntity.getType())
                .stars(forumEntity.getStars())
                .reviews(forumEntity.getReviews())
                .created(forumEntity.getCreated())
                .userEmail(forumEntity.getUserEmail())
                .build());
    }

    public Mono<ForumUpdateResponse> update(ForumUpdateRequest request) {
        String currentUserEmail = Reusables.getCurrentUsername();
        return forumRepository.findById(request.getId())
                .flatMap(existingForum -> {
                    if(existingForum.getUserEmail().equals(currentUserEmail)) {
                        existingForum.setTitle(request.getTitle());
                        existingForum.setDescription(request.getDescription());
                        existingForum.setModified(LocalDate.now());
                    }
                    else{
                        return Mono.error(new RuntimeException("User does not have permission to update forum"));
                    }
                    return forumRepository.save(existingForum);
                }).map(forumEntity -> ForumUpdateResponse.builder()
                        .id(forumEntity.getId())
                        .title(forumEntity.getTitle())
                        .description(forumEntity.getDescription())
                        .type(forumEntity.getType())
                        .stars(forumEntity.getStars())
                        .reviews(forumEntity.getReviews())
                        .created(forumEntity.getCreated())
                        .userEmail(forumEntity.getUserEmail())
                        .modified(forumEntity.getModified())
                        .build());
    }

    public Mono<ForumDeleteResponse> delete(ForumDeleteRequest request){
        String currentUserEmail = Reusables.getCurrentUsername();
        return forumRepository.findById(request.getId())
                .flatMap(existingForum -> {
                    if(existingForum.getUserEmail().equals(currentUserEmail)) {
                        existingForum.setIsRemoved(true);
                    }
                    else{
                        return Mono.error(new RuntimeException("User does not have permission to delete forum"));
                    }
                    return forumRepository.save(existingForum)
                            .then(Mono.just(ForumDeleteResponse.builder().success(true).build()));
                });
    }

    public Flux<ForumFindResponse> getAll() {
        return forumRepository.findAllSelected();
    }

    public Mono<ForumFindResponse> getById(String id) {
        return forumRepository.findOneById(id);
    }
}
