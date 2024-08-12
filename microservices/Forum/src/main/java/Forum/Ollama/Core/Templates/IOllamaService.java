package Forum.Ollama.Core.Templates;

import org.springframework.ai.chat.model.ChatResponse;
import reactor.core.publisher.Flux;

public interface IOllamaService {
    Flux<String> generateMessage(String prompt);
}
