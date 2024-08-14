package Forum.Features.Ollama.Controller;


import Forum.Features.Ollama.Core.DataTypeObjects.ErrorResponse;
import Forum.Features.Ollama.Core.DataTypeObjects.LllamaRequest;
import Forum.Features.Ollama.Service.OllamaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/forum/model")
@RequiredArgsConstructor
public class OllamaController {

    private final OllamaService ollamaService;

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Hello World");
    }

    @PostMapping("/generate")
    public ResponseEntity<?> generate(@RequestBody LllamaRequest lllamaRequest) {
        try{
            return ResponseEntity.ok(ollamaService.generateMessage(lllamaRequest.getPrompt()));
        }
        catch (Exception e){
            ErrorResponse errorResponse = ErrorResponse.builder().error(e.getMessage()).build();
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}
