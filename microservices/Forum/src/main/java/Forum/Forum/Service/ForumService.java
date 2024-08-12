package Forum.Forum.Service;

import Forum.Forum.Core.DataTypeObjects.Forum.*;
import Forum.Forum.Model.ForumEntity;
import Forum.Forum.Repository.ForumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ForumService {

    private final ForumRepository forumRepository;

    public Mono<ForumEntity> create(ForumCreateRequest request) {
        return forumRepository.save(
                ForumEntity.builder()
                        .title(request.getTitle())
                        .description(request.getDescription())
                        .type(request.getForumType())
                        .stars(0L)
                        .reviews(0L)
                        .created(LocalDate.now())
                        .modified(LocalDate.now())
                        .userEmail(request.getUserEmail())
                        .isRemoved(false)
                        .build()
        );
    }

    public Mono<ForumEntity> update(ForumUpdateRequest request) {
        return forumRepository.findById(request.getId())
                .flatMap(existingForum -> {
                    existingForum.setTitle(request.getTitle());
                    existingForum.setDescription(request.getDescription());
                    existingForum.setModified(LocalDate.now());
                    return forumRepository.save(existingForum);
                });
    }

    public Mono<ForumDeleteResponse> delete(ForumDeleteRequest request){
        return forumRepository.findById(request.getId())
                .flatMap(existingForum -> {
                    existingForum.setModified(LocalDate.now());
                    existingForum.setIsRemoved(true);
                    return forumRepository.save(existingForum).then(Mono.just(ForumDeleteResponse.builder().success(true).build()));
                });
    }

    public Flux<ForumFindResponse> getAll() {
        return forumRepository.findAllSelected();
    }

    public Mono<ForumFindResponse> getById(String id) {
        return forumRepository.findOneById(id);
    }
}
