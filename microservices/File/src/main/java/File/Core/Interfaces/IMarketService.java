package File.Core.Interfaces;

import File.Entity.AvatarEntity;

import java.util.List;

public interface IMarketService {
    void save(String url, String name, String username);
    List<AvatarEntity> fetchAll();
}
