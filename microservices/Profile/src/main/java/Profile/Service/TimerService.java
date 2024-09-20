package Profile.Service;

import Profile.Core.DataTransferObjects.TimerRequest;
import Profile.Core.Interfaces.ITimerService;
import Profile.Core.Utils.Reusables;
import Profile.Entity.TimerEntity;
import Profile.Repository.TimerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TimerService implements ITimerService {
    private final TimerRepository repository;
    @Override
    public void saveTimerInfo(TimerRequest request) {
        TimerEntity timerEntity = TimerEntity.builder()
                .userEmail(Reusables.getCurrentUsername())
                .time(LocalDateTime.now())
                .focusTime(request.getFocusTime())
                .restTime(request.getRestTime())
                .sessions(request.getSessions())
                .build();
        this.repository.save(timerEntity);
    }

    @Override
    public List<TimerEntity> fetch() {
        return this.repository.findByUserEmail(Reusables.getCurrentUsername());
    }

    @Override
    public List<TimerEntity> fetchToday() {
        LocalDateTime startOfDay = LocalDate.now().atStartOfDay();
        LocalDateTime endOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
        return this.repository.findByUserEmailAndTimeBetween(Reusables.getCurrentUsername(), startOfDay, endOfDay);
    }
}
