package com.example.server.Core.Enums;

public enum Status {


    TODO("ToDo"),
    IN_PROGRESS("InProgress"),
    DONE("Done");

    private final String value;

    Status(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}
