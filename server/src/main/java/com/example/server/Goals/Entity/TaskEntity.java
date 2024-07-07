package com.example.server.Goals.Entity;

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
    public String id;
    @Field
    private String userEmail;
    @Field
    public String Title;
    @Field
    public String Description;
    @Field
    public String Status;
    @Field
    public Date StartTime;
    @Field
    public Date EndTime;
    @Field
    public String Notes;
}
