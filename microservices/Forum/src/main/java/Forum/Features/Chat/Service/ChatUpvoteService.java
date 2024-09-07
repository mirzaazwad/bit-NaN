package Forum.Features.Chat.Service;

import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Request.ChatUpvoteCreateRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Request.ChatUpvoteDeleteRequest;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvoteCreateResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvoteDeleteResponse;
import Forum.Features.Chat.Core.DataTypeObjects.ChatUpvote.Response.ChatUpvotesFindResponse;
import Forum.Features.Chat.Model.ChatUpvotesEntity;
import Forum.Features.Chat.Repository.ChatDownvotesRepository;
import Forum.Features.Chat.Repository.ChatUpvotesRepository;
import Forum.Features.Chat.Repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class ChatUpvoteService {

    private final ChatUpvotesRepository chatUpvotesRepository;
    private final ChatRepository chatRepository;
    private final ChatDownvotesRepository chatDownvotesRepository;

    public Mono<ChatUpvoteCreateResponse> addUpvote(ChatUpvoteCreateRequest request) {
        return chatDownvotesRepository.findByChatIdAndUserEmail(request.getChatId(), request.getUserEmail())
                .flatMap(existingDownvote -> chatDownvotesRepository.delete(existingDownvote)
                        .then(Mono.defer(() -> chatRepository.findById(existingDownvote.getChatId())
                                .flatMap(existingChat -> {
                                    existingChat.setDownvotes(existingChat.getDownvotes() - 1);
                                    return chatRepository.save(existingChat);
                                })))
                        .then(chatUpvotesRepository.save(
                                ChatUpvotesEntity.builder()
                                        .chatId(request.getChatId())
                                        .userEmail(request.getUserEmail())
                                        .created(LocalDate.now())
                                        .build()
                        ).flatMap(chatUpvoteEntity ->
                                chatRepository.findById(chatUpvoteEntity.getChatId().toString())
                                        .flatMap(chatEntity -> {
                                            chatEntity.setUpvotes(chatEntity.getUpvotes() + 1);
                                            return chatRepository.save(chatEntity);
                                        })
                                        .then(Mono.just(ChatUpvoteCreateResponse.builder()
                                                .id(chatUpvoteEntity.getId())
                                                .chatId(chatUpvoteEntity.getChatId())
                                                .userEmail(chatUpvoteEntity.getUserEmail())
                                                .created(chatUpvoteEntity.getCreated())
                                                .build()))
                        )));
    }

    public Mono<ChatUpvoteDeleteResponse> deleteUpvote(ChatUpvoteDeleteRequest request) {
        return chatUpvotesRepository.findById(request.getId())
                .flatMap(existingUpvote -> chatUpvotesRepository.delete(existingUpvote)
                        .then(chatRepository.findById(existingUpvote.getChatId()))
                        .flatMap(chatEntity -> {
                            chatEntity.setUpvotes(chatEntity.getUpvotes() - 1);
                            return chatRepository.save(chatEntity)
                                    .then(Mono.just(ChatUpvoteDeleteResponse.builder().success(true).build()));
                        })
                );
    }

    public Flux<ChatUpvotesFindResponse> getAllUpvotesForChat(String chatId) {
        return chatUpvotesRepository.findAllSelected(chatId);
    }

    public Mono<ChatUpvotesFindResponse> getChatUpvote(String id) {
        return chatUpvotesRepository.findOneById(id);
    }
}
