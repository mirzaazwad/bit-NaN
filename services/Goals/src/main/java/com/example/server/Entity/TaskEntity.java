package com.example.server.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "tasks")
public class TaskEntity {
    @Id
    private String id;
    @Field
    private String userEmail;
    @Field
    private String title;
    @Field
    private String description;
    @Field
    private String status;
    @Field
    private Date startTime;
    @Field
    private Date endTime;
    @Field
    private String notes;
}
