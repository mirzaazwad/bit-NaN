package com.example.APIGateway.Authentication.Core.Enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    DEVELOPER_READ("dev:read"),
    DEVELOPER_UPDATE("dev:update"),
    DEVELOPER_CREATE("dev:create"),
    DEVELOPER_DELETE("dev:delete"),
    USERS_READ("users:read"),
    USERS_UPDATE("users:update"),
    USERS_CREATE("users:create"),
    USERS_DELETE("users:delete"),
    ;

    @Getter
    private final String permission;
}