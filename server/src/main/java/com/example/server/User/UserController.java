package com.example.server.User;

import com.example.server.User.utils.AuthenticationRequest;
import com.example.server.User.utils.AuthenticationResponse;
import com.example.server.User.utils.ErrorResponse;
import com.example.server.User.utils.RegisterRequest;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name="Authentication")
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
                            description = "Unauthorized / Invalid Token",
                            responseCode = "403"
                    )
            }
    )
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        AuthenticationResponse authenticationResponse = userService.register(request);
        if(authenticationResponse.getMessage().equals("User already exists")){
            ErrorResponse errorResponse = ErrorResponse.builder()
                    .error(authenticationResponse.getMessage())
                    .build();
            return ResponseEntity.badRequest().body(errorResponse);
        }
        else{
            return ResponseEntity.ok(authenticationResponse);
        }
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
                            description = "Unauthorized / Invalid Token",
                            responseCode = "403"
                    )
            }
    )
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        AuthenticationResponse authenticationResponse = userService.authenticate(request);
        if ("Bad credentials".equals(authenticationResponse.getMessage())) {
            ErrorResponse errorResponse = ErrorResponse.builder()
                    .error(authenticationResponse.getMessage())
                    .build();
            return ResponseEntity.badRequest().body(errorResponse);
        }
        return ResponseEntity.ok(authenticationResponse);
    }

}
