package com.example.APIGateway.Authentication.Controller;

import com.example.APIGateway.Authentication.Core.DataTypeObjects.*;
import com.example.APIGateway.Authentication.Service.UserService;
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
@RequestMapping("/api/v1/auth")
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
        try{
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
        catch (Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
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
        try{
            AuthenticationResponse authenticationResponse = userService.authenticate(request);
            if ("Bad credentials".equals(authenticationResponse.getMessage())) {
                ErrorResponse errorResponse = ErrorResponse.builder()
                        .error(authenticationResponse.getMessage())
                        .build();
                return ResponseEntity.badRequest().body(errorResponse);
            }
            return ResponseEntity.ok(authenticationResponse);
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refresh(@RequestBody TokenRequest request){
        try{
            TokenResponse tokenResponse=userService.getToken(request);
            switch (tokenResponse.getMessage()) {
                case "Token not found", "Bad credentials", "Failed Delete of Refresh Token", "Token Expired" -> {
                    ErrorResponse errorResponse = ErrorResponse.builder()
                            .error(tokenResponse.getMessage())
                            .build();
                    return ResponseEntity.badRequest().body(errorResponse);
                }
                case null, default -> {
                    return ResponseEntity.ok(tokenResponse);
                }
            }
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/verify-access")
    public ResponseEntity<?> verify(@RequestBody TokenVerificationRequest request){
        try{
            TokenVerificationResponse tokenVerificationResponse=userService.verify(request);
            return ResponseEntity.ok(tokenVerificationResponse);
        }
        catch (Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

}
