package com.example.server.Goals.Core.DataTransferObjects;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskDto {

    public String Title;
    public String Description;
    public String Status;
    public Date StartTime;
    public Date EndTime;
    public String Notes;
}
