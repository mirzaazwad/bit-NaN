package APIGateway.Controller;

import APIGateway.Service.TokenService;
import APIGateway.Core.DataTypeObjects.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/token")
@RequiredArgsConstructor
@Tag(name = "Token")
public class TokenController {

    private final TokenService tokenService;

    @PostMapping("/access")
    public Mono<ResponseEntity<TokenResponse>> getToken(@RequestBody TokenRequest request) {
        return tokenService.getToken(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new TokenResponse(e.getMessage()))));
    }

    @PostMapping("/verify")
    public Mono<ResponseEntity<TokenVerificationResponse>> verify(@RequestBody TokenVerificationRequest request) {
        return tokenService.verifyToken(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new TokenVerificationResponse(e.getMessage()))));
    }

    @PostMapping("/logout")
    public Mono<ResponseEntity<LogoutResponse>> logout(@RequestBody LogoutRequest request) {
        return tokenService.logout(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e->Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new LogoutResponse(e.getMessage()))));
    }
}
