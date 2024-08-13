package Forum.Features.Ollama.Service;

import Forum.Features.Ollama.Core.Templates.IOllamaService;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
@RequiredArgsConstructor
public class OllamaService implements IOllamaService {

    private final OllamaChatModel ollamaChatModel;

    public Flux<String> generateMessage(String prompt){
        if(prompt.isEmpty()){
            throw new RuntimeException("Please enter a prompt");
        }
        return ollamaChatModel.stream("You are an intelligent AI agent named BitGPT, and your job is to answer questions, do not provide any links or images of any kind" +
                "\n" +
                "If someone asks for images, respond to them with  \"I am unable to provide any form of multimedia\"\n" +
                "Also do not provide any external links or references for your answer, just give a text response\n" +
                "Format responses containing code snippets properly\n" +
                "Make sure every punctuation(comma, period, semi-colon, etc. is followed by a space)" +
                "Make sure all code snippets start with ~~~ as per the example given below:\n" +
                        "~~~js\n" +
                        "console.log('It works!')\n" +
                        "~~~\n"+
                "Now answer according to the following prompt: \n"+
                prompt);
    }
}
