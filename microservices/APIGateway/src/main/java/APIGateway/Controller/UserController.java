package APIGateway.Controller;

import APIGateway.Service.UserService;
import APIGateway.Core.DataTypeObjects.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class UserController {

    private final UserService userService;
    @Operation(
            description = "Registration Endpoint for General User",
            summary = "This endpoint involves user creation or registering a new general user to the system, it finally provides an access token and a refresh token",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "User Already Exists",
                            responseCode = "500"
                    )
            }
    )
    @PostMapping("/register")
    public Mono<ResponseEntity<Object>> register(@RequestBody RegisterRequest request) {
        return userService.register(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new AuthenticationResponse(e.getMessage()))));
    }
    @Operation(
            description = "Authentication Endpoint for General User",
            summary = "This endpoint involves checking whether a user can be authenticated or not, it can be used for login and finally provides an access token and a refresh token",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "User Not Found",
                            responseCode = "500"
                    )
            }
    )

    @PostMapping("/login")
    public Mono<ResponseEntity<AuthenticationResponse>> authenticate(@RequestBody AuthenticationRequest request) {
        return userService.login(request)
                .map(ResponseEntity::ok)
                .onErrorResume(e -> Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new AuthenticationResponse(e.getMessage()))));
    }
}
