package File.Core.Interfaces;

import File.Entity.AvatarEntity;

import java.util.List;
import java.util.Optional;

public interface IMarketService {
    void save(String url, String name, String username);
    List<AvatarEntity> fetchAll();
    Optional<AvatarEntity> fetchById(String id);
}
