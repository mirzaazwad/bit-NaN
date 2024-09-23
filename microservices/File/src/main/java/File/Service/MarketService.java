package File.Service;

import File.Core.Interfaces.IMarketService;
import File.Core.Utils.Reusables;
import File.Entity.AvatarEntity;
import File.Repositoy.MarketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MarketService implements IMarketService {
    private final MarketRepository repository;
    @Override
    public void save(String url, String name, String username) {
        AvatarEntity entity = AvatarEntity.builder()
                .name(name)
                .url(url)
                .uploaderEmail(Reusables.getCurrentUsername())
                .uploaderName(username)
                .build();
        this.repository.save(entity);
    }

    @Override
    public List<AvatarEntity> fetchAll() {
        return this.repository.findAll();
    }

    @Override
    public Optional<AvatarEntity> fetchById(String id) {
        return this.repository.findById(id);
    }
}
