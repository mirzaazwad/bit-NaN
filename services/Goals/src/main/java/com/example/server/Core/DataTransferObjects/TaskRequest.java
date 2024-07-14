package com.example.server.Core.DataTransferObjects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequest {

    private String Title;
    private String Description;
    private String Status;
    private Date StartTime;
    private Date EndTime;
    private String Notes;
}
