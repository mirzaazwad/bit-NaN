package Chat.Core.Interface;

import Chat.Core.DataTransferObjects.ChatMessage;
import Chat.Entity.Message;

import java.util.List;

public interface IChatService {
    void saveMessage(String groupId, ChatMessage chatMessage);
    List<Message> getChatHistory(String groupId);
}
