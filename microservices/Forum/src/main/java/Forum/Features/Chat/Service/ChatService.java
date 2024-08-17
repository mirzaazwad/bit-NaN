package Forum.Features.Chat.Service;

import Forum.Features.Chat.Core.DataTypeObjects.Chat.Request.ChatCreateRequest;
import Forum.Features.Chat.Core.DataTypeObjects.Chat.Request.ChatDeleteRequest;
import Forum.Features.Chat.Core.DataTypeObjects.Chat.Response.ChatCreateResponse;
import Forum.Features.Chat.Core.DataTypeObjects.Chat.Response.ChatDeleteResponse;
import Forum.Features.Chat.Core.DataTypeObjects.Chat.Response.ChatFindResponse;
import Forum.Features.Chat.Model.ChatEntity;
import Forum.Features.Chat.Repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDate;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepository;

    public Mono<ChatCreateResponse> addChat(ChatCreateRequest chatCreateRequest) {
        return chatRepository.save(
                ChatEntity.builder()
                        .forumId(chatCreateRequest.getForumId())
                        .userEmail(chatCreateRequest.getUserEmail())
                        .prompt(chatCreateRequest.getPrompt())
                        .response(chatCreateRequest.getResponse())
                        .created(LocalDate.now())
                        .upvotes(0L)
                        .downvotes(0L)
                        .comments(0L)
                        .isRemoved(false)
                        .build()
        ).map(chatEntity -> ChatCreateResponse.builder()
                .id(chatEntity.getId())
                .forumId(chatEntity.getForumId())
                .userEmail(chatEntity.getUserEmail())
                .prompt(chatEntity.getPrompt())
                .response(chatEntity.getResponse())
                .created(chatEntity.getCreated())
                .upvotes(chatEntity.getUpvotes())
                .downvotes(chatEntity.getDownvotes())
                .comments(chatEntity.getComments())
                .build());
    }

    public Mono<ChatDeleteResponse> deleteChat(ChatDeleteRequest chatDeleteRequest) {
        return chatRepository.findById(chatDeleteRequest.getId())
                .flatMap(existingChat -> {
                    existingChat.setIsRemoved(true);
                    return chatRepository.save(existingChat)
                            .then(Mono.just(ChatDeleteResponse.builder().success(true).build()));
                });
    }

    public Flux<ChatFindResponse> getAllChatsForForum(String forumId) {
        return chatRepository.findAllSelected(forumId);
    }

    public Mono<ChatFindResponse> getChat(String id) {
        return chatRepository.findOneById(id);
    }
}
