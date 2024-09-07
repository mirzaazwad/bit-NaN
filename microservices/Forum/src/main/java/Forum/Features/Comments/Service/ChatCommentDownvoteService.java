package Forum.Features.Comments.Service;

import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentDownvote.ChatCommentDownvoteCreateRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Request.ChatCommentDownvote.ChatCommentDownvoteDeleteRequest;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote.ChatCommentDownvoteCreateResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote.ChatCommentDownvoteDeleteResponse;
import Forum.Features.Comments.Core.DataTypeObjects.Response.ChatCommentDownvote.ChatCommentDownvoteFindResponse;
import Forum.Features.Comments.Model.ChatCommentsDownvoteEntity;
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
public class ChatCommentDownvoteService {

    private final ChatCommentsRepository chatCommentsRepository;
    private final ChatCommentDownvoteRepository chatCommentDownvoteRepository;
    private final ChatCommentUpvoteRepository chatCommentUpvoteRepository;

    public Mono<ChatCommentDownvoteCreateResponse> addDownvote(ChatCommentDownvoteCreateRequest request) {
        return chatCommentUpvoteRepository.findByCommentIdAndUserEmail(request.getCommentId(), request.getUserEmail())
                .flatMap(existingUpvote -> chatCommentUpvoteRepository.delete(existingUpvote)
                        .then(Mono.defer(() -> chatCommentsRepository.findById(existingUpvote.getCommentId())
                                .flatMap(existingComment -> {
                                    existingComment.setUpvotes(existingComment.getUpvotes() - 1);
                                    return chatCommentsRepository.save(existingComment);
                                })))
                )
                        .then(chatCommentDownvoteRepository.save(
                                ChatCommentsDownvoteEntity.builder()
                                        .commentId(request.getCommentId())
                                        .userEmail(request.getUserEmail())
                                        .created(LocalDate.now())
                                        .build()
                        ).flatMap(chatDownvoteEntity ->
                                chatCommentsRepository.findById(chatDownvoteEntity.getCommentId())
                                        .flatMap(chatCommentEntity -> {
                                            chatCommentEntity.setDownvotes(chatCommentEntity.getDownvotes() + 1);
                                            return chatCommentsRepository.save(chatCommentEntity);
                                        })
                                        .then(Mono.just(ChatCommentDownvoteCreateResponse.builder()
                                                .id(chatDownvoteEntity.getId())
                                                .commentId(chatDownvoteEntity.getCommentId())
                                                .userEmail(chatDownvoteEntity.getUserEmail())
                                                .created(chatDownvoteEntity.getCreated())
                                                .build()))
                        ));
    }

    public Mono<ChatCommentDownvoteDeleteResponse> deleteDownvote(ChatCommentDownvoteDeleteRequest request) {
        return chatCommentDownvoteRepository.findById(request.getId())
                .flatMap(existingDownvote -> chatCommentDownvoteRepository.delete(existingDownvote)
                        .then(chatCommentsRepository.findById(existingDownvote.getCommentId()))
                        .flatMap(chatCommentEntity -> {
                            chatCommentEntity.setDownvotes(chatCommentEntity.getDownvotes() - 1);
                            return chatCommentsRepository.save(chatCommentEntity)
                                    .then(Mono.just(ChatCommentDownvoteDeleteResponse.builder().success(true).build()));
                        })

                );
    }

    public Flux<ChatCommentDownvoteFindResponse> getAllDownvotesForComment(String commentId) {
        return chatCommentDownvoteRepository.findAllSelected(commentId);
    }

    public Mono<ChatCommentDownvoteFindResponse> getCommentDownvote(String id) {
        return chatCommentDownvoteRepository.findOneById(id);
    }
}
