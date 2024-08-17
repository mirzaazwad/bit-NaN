package Forum.Features.Comments.Service;

import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment.ChatCommentCreateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment.ChatCommentDeleteRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatComment.ChatCommentUpdateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentCreateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentDeleteResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentUpdateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatComment.ChatCommentsFindResponse;
import Forum.Features.Comments.Model.ChatCommentsEntity;
import Forum.Features.Comments.Repository.ChatCommentsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ChatCommentService {

    private final ChatCommentsRepository chatCommentsRepository;

    public Mono<ChatCommentCreateResponse> createComment(ChatCommentCreateRequest request) {
        return chatCommentsRepository.save(
                ChatCommentsEntity.builder()
                        .chatId(request.getChatId())
                        .userEmail(request.getUserEmail())
                        .comment(request.getComment())
                        .upvotes(0L)
                        .downvotes(0L)
                        .created(LocalDate.now())
                        .modified(LocalDate.now())
                        .isRemoved(false)
                        .build()
        ).map(chatCommentsEntity -> ChatCommentCreateResponse.builder()
                .id(chatCommentsEntity.getId())
                .chatId(chatCommentsEntity.getChatId())
                .userEmail(chatCommentsEntity.getUserEmail())
                .comment(chatCommentsEntity.getComment())
                .upvotes(chatCommentsEntity.getUpvotes())
                .downvotes(chatCommentsEntity.getDownvotes())
                .created(chatCommentsEntity.getCreated())
                .build());
    }

    public Mono<ChatCommentUpdateResponse> updateComment(ChatCommentUpdateRequest request) {
        return chatCommentsRepository.findById(request.getId())
                .flatMap(existingComment -> {
                    existingComment.setComment(request.getComment());
                    existingComment.setModified(LocalDate.now());
                    return chatCommentsRepository.save(existingComment)
                            .map(chatCommentsEntity -> ChatCommentUpdateResponse.builder()
                                    .id(chatCommentsEntity.getId())
                                    .chatId(chatCommentsEntity.getChatId())
                                    .userEmail(chatCommentsEntity.getUserEmail())
                                    .comment(chatCommentsEntity.getComment())
                                    .upvotes(chatCommentsEntity.getUpvotes())
                                    .downvotes(chatCommentsEntity.getDownvotes())
                                    .created(chatCommentsEntity.getCreated())
                                    .modified(chatCommentsEntity.getModified())
                                    .build()
                            );
                });
    }

    public Mono<ChatCommentDeleteResponse> deleteComment(ChatCommentDeleteRequest request) {
        return chatCommentsRepository.findById(request.getId())
                .flatMap(existingComment -> {
                    existingComment.setIsRemoved(true);
                    return chatCommentsRepository.save(existingComment)
                            .then(Mono.just(ChatCommentDeleteResponse.builder().success(true).build()));
                });
    }

    public Mono<ChatCommentsFindResponse> findCommentById(String id) {
        return chatCommentsRepository.findOneById(id);
    }

    public Flux<ChatCommentsFindResponse> findAllCommentsForChat(String chatId) {
        return chatCommentsRepository.findAllSelected(chatId);
    }
}
