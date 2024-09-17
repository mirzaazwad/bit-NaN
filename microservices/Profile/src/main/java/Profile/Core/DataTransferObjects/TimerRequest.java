package Profile.Core.DataTransferObjects;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TimerRequest {
    private int sessions;
    private int focusTime;
    private int restTime;
}
