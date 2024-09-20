package Profile.Core.Interfaces;

import Profile.Core.DataTransferObjects.TimerRequest;

public interface ITimerService {
    void saveTimerInfo(TimerRequest request);
}
