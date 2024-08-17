package Forum.Features.Comments.Service;

import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentUpvote.ChatCommentUpvoteCreateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentUpvote.ChatCommentUpvoteDeleteRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteCreateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteDeleteResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentUpvote.ChatCommentUpvoteFindResponse;
import Forum.Features.Comments.Model.ChatCommentsUpvotesEntity;
import Forum.Features.Comments.Repository.ChatCommentDownvoteRepository;
import Forum.Features.Comments.Repository.ChatCommentUpvoteRepository;
import Forum.Features.Comments.Repository.ChatCommentsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ChatCommentUpvoteService {

    private final ChatCommentsRepository chatCommentsRepository;
    private final ChatCommentUpvoteRepository chatCommentUpvoteRepository;
    private final ChatCommentDownvoteRepository chatCommentDownvoteRepository;

    public Mono<ChatCommentUpvoteCreateResponse> addUpvote(ChatCommentUpvoteCreateRequest request) {
        return chatCommentDownvoteRepository.findByCommentIdAndUserEmail(request.getCommentId(), request.getUserEmail())
                .flatMap(existingDownvote -> chatCommentDownvoteRepository.delete(existingDownvote)
                        .then(Mono.defer(() -> chatCommentsRepository.findById(existingDownvote.getCommentId())
                                .flatMap(existingComment -> {
                                    existingComment.setDownvotes(existingComment.getDownvotes() - 1);
                                    return chatCommentsRepository.save(existingComment);
                                })))
                )
                .then(chatCommentUpvoteRepository.save(
                        ChatCommentsUpvotesEntity.builder()
                                .commentId(request.getCommentId())
                                .userEmail(request.getUserEmail())
                                .created(LocalDate.now())
                                .build()
                ).flatMap(chatUpvoteEntity ->
                        chatCommentsRepository.findById(chatUpvoteEntity.getCommentId())
                                .flatMap(chatCommentEntity -> {
                                    System.out.println(chatCommentEntity);
                                    chatCommentEntity.setUpvotes(chatCommentEntity.getUpvotes() + 1);
                                    return chatCommentsRepository.save(chatCommentEntity);
                                })
                                .then(Mono.just(ChatCommentUpvoteCreateResponse.builder()
                                        .id(chatUpvoteEntity.getId())
                                        .commentId(chatUpvoteEntity.getCommentId())
                                        .userEmail(chatUpvoteEntity.getUserEmail())
                                        .created(chatUpvoteEntity.getCreated())
                                        .build()))
                ));
    }

    public Mono<ChatCommentUpvoteDeleteResponse> deleteUpvote(ChatCommentUpvoteDeleteRequest request) {
        return chatCommentUpvoteRepository.findById(request.getId())
                .flatMap(existingUpvote -> chatCommentUpvoteRepository.delete(existingUpvote)
                        .then(chatCommentsRepository.findById(existingUpvote.getCommentId()))
                        .flatMap(chatCommentEntity -> {
                            chatCommentEntity.setUpvotes(chatCommentEntity.getUpvotes() - 1);
                            return chatCommentsRepository.save(chatCommentEntity)
                                    .then(Mono.just(ChatCommentUpvoteDeleteResponse.builder().success(true).build()));
                        })

                );
    }

    public Flux<ChatCommentUpvoteFindResponse> getAllUpvotesForComment(String commentId) {
        return chatCommentUpvoteRepository.findAllSelected(commentId);
    }

    public Mono<ChatCommentUpvoteFindResponse> getCommentUpvote(String id) {
        return chatCommentUpvoteRepository.findOneById(id);
    }
}
