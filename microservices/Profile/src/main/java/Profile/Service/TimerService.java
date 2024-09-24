package Profile.Service;

import Profile.Core.DataTransferObjects.TimerRequest;
import Profile.Core.Interfaces.ITimerService;
import Profile.Core.Utils.Reusables;
import Profile.Entity.ProgressEntity;
import Profile.Entity.TimerEntity;
import Profile.Repository.ProgressRepository;
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
    private final ProgressRepository progressRepository;
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
        this.savePoints(request.getFocusTime());
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

    @Override
    public int fetchPoints() {
        List<ProgressEntity> entities = progressRepository.findByUserEmail(Reusables.getCurrentUsername());
        int points = 0;
        if(!entities.isEmpty()){
            for(ProgressEntity entity : entities){
               points += entity.getPoints();
            }
        }
        return points;
    }

    private void savePoints(int focusTime){
        String username = Reusables.getCurrentUsername();
        List<ProgressEntity> entities = progressRepository.findByUserEmail(username);

        ProgressEntity progressEntity;

        if(entities.isEmpty()){
            progressEntity = ProgressEntity.builder()
                    .userEmail(username)
                    .points(calculatePoints(focusTime))
                    .build();
        }else{
            progressEntity = entities.get(0);
            progressEntity.setPoints(progressEntity.getPoints()  + calculatePoints(focusTime));
        }
        this.progressRepository.save(progressEntity);
    }

    private int calculatePoints(int focusTime){
        focusTime = focusTime / 60; // Convert to minutes
        return focusTime / 18; // 1 point for every 18 minutes
    }
}
