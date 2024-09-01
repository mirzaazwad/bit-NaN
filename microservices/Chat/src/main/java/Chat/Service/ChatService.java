package Chat.Service;

import Chat.Core.DataTransferObjects.ChatMessage;
import Chat.Core.Enums.MessageType;
import Chat.Core.Interface.IChatService;
import Chat.Core.Utils.Reusables;
import Chat.Entity.Message;
import Chat.Repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService implements IChatService {

    private final ChatRepository repository;
    @Override
    public void saveMessage(
            String groupId,
            ChatMessage chatMessage
    ) {
        Message message = Message.builder()
                .groupId(groupId)
                .sender(Reusables.getCurrentUsername())
                .type(MessageType.CHAT)
                .timestamp(LocalDateTime.now())
                .build();

        repository.save(message);
    }

    @Override
    public List<Message> getChatHistory(String groupId) {
        return repository.findByGroupId(groupId);
    }
}
