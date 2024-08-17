package Forum.Features.Chat.Service;

import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Request.ChatDownvoteCreateRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Request.ChatDownvoteDeleteRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvoteCreateResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvoteDeleteResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatDownvote.Response.ChatDownvotesFindResponse;
import Forum.Features.Chat.Model.ChatDownvotesEntity;
import Forum.Features.Chat.Repository.ChatDownvotesRepository;
import Forum.Features.Chat.Repository.ChatRepository;
import Forum.Features.Chat.Repository.ChatUpvotesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ChatDownvoteService {

    private final ChatDownvotesRepository chatDownvotesRepository;
    private final ChatUpvotesRepository chatUpvotesRepository;
    private final ChatRepository chatRepository;

    public Mono<ChatDownvoteCreateResponse> addDownvote(ChatDownvoteCreateRequest request) {
        return chatUpvotesRepository.findByChatIdAndUserEmail(request.getChatId(), request.getUserEmail())
                .flatMap(existingUpvote -> chatUpvotesRepository.delete(existingUpvote)
                        .then(Mono.defer(() -> chatRepository.findById(existingUpvote.getChatId())
                                .flatMap(existingChat -> {
                                    existingChat.setUpvotes(existingChat.getUpvotes() - 1);
                                    return chatRepository.save(existingChat);
                                })))
                        .then(chatDownvotesRepository.save(
                                ChatDownvotesEntity.builder()
                                        .chatId(request.getChatId())
                                        .userEmail(request.getUserEmail())
                                        .created(LocalDate.now())
                                        .build()
                        ).flatMap(chatDownvoteEntity ->
                                chatRepository.findById(chatDownvoteEntity.getChatId().toString())
                                        .flatMap(chatEntity -> {
                                            chatEntity.setDownvotes(chatEntity.getDownvotes() + 1);
                                            return chatRepository.save(chatEntity);
                                        })
                                        .then(Mono.just(ChatDownvoteCreateResponse.builder()
                                                .id(chatDownvoteEntity.getId())
                                                .chatId(chatDownvoteEntity.getChatId())
                                                .userEmail(chatDownvoteEntity.getUserEmail())
                                                .created(chatDownvoteEntity.getCreated())
                                                .build()))
                        )));
    }

    public Mono<ChatDownvoteDeleteResponse> deleteDownvote(ChatDownvoteDeleteRequest request) {
        return chatDownvotesRepository.findById(request.getId())
                .flatMap(existingDownvote -> chatDownvotesRepository.delete(existingDownvote)
                        .then(chatRepository.findById(existingDownvote.getChatId()))
                        .flatMap(chatEntity -> {
                            chatEntity.setDownvotes(chatEntity.getDownvotes() - 1);
                            return chatRepository.save(chatEntity)
                                    .then(Mono.just(ChatDownvoteDeleteResponse.builder().success(true).build()));
                        })

                );
    }

    public Flux<ChatDownvotesFindResponse> getAllDownvotesForChat(String chatId) {
        return chatDownvotesRepository.findAllSelected(chatId);
    }

    public Mono<ChatDownvotesFindResponse> getChatDownvote(String id) {
        return chatDownvotesRepository.findOneById(id);
    }
}
