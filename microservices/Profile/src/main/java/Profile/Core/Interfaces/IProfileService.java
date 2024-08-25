package Profile.Core.Interfaces;

import Profile.Core.DataTransferObjects.ProfileRequest;
import Profile.Entity.ProfileEntity;

public interface IProfileService {
    void update(ProfileRequest request);
    ProfileEntity getCurrentUserProfile();
<<<<<<< HEAD

    ProfileEntity getProfileByEmail(String email);
=======
    Object getProfileByEmail(String email);
>>>>>>> 455787c (ForumPrimary UI Updated)
}
