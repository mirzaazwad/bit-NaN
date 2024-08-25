package Profile.Core.Interfaces;

import Profile.Core.DataTransferObjects.ProfileRequest;
import Profile.Entity.ProfileEntity;

public interface IProfileService {
    void update(ProfileRequest request);
    ProfileEntity getCurrentUserProfile();
    Object getProfileByEmail(String email);
}
