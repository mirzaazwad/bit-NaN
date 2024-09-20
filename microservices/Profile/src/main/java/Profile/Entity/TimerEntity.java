package Profile.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Timer")
public class TimerEntity {
    @Id
    private String id;
    @Field
    private int sessions;
    @Field
    private int focusTime;
    @Field
    private int restTime;
    @Field
    private LocalDateTime time;
    @Field
    private String userEmail;
}
