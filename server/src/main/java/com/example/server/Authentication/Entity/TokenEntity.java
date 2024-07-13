package com.example.server.Authentication.Entity;

import com.example.server.Authentication.Core.Enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Calendar;
import java.util.Date;
@Document(collection = "tokens")
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenEntity {
    @Id
    private String refreshToken;
    @Field
    private Date issued_time;
    @Field
    private String email;
    @Field
    private Role role;
    @Field
    private String accessToken;
    @Value("${application.security.jwt.refresh-token.expiration}")
    private static Integer expires_in;
}



