package com.example.APIGateway.Core.DataTypeObjects;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {
    private String access;
    private String message;
    public static TokenResponse ErrorResponse(String message){
        return new TokenResponse(message);
    }

    private TokenResponse(String message){
        this.message = message;
    }
}
