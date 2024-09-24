package Profile.Core.Interfaces;

import Profile.Core.DataTransferObjects.ProfileRequest;
import Profile.Entity.ProfileEntity;
import Profile.Entity.UserProductEntity;

import java.util.List;

public interface IProfileService {
    void update(ProfileRequest request);
    ProfileEntity getCurrentUserProfile();
    ProfileEntity getProfileByEmail(String email);
    void saveProduct(String productId);
    List<String> getProducts();
}
