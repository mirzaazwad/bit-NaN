package com.example.server.Goals.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "tasks")
public class TaskEntity {
    @Id
    public String id;
    @Field
    public String Title;
    @Field
    public String Description;
    @Field
    public String StartDate;
    @Field
    public String EndDate;
    @Field
    public String Notes;
}
