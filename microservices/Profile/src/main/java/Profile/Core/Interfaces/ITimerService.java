package Profile.Core.Interfaces;

import Profile.Core.DataTransferObjects.TimerRequest;
import Profile.Entity.ProgressEntity;
import Profile.Entity.TimerEntity;

import java.util.List;

public interface ITimerService {
    void saveTimerInfo(TimerRequest request);
    List<TimerEntity> fetch();
    List<TimerEntity> fetchToday();
    int fetchPoints();
}
