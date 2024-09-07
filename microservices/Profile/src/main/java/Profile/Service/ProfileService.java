package Profile.Service;

import Profile.Core.DataTransferObjects.ProfileRequest;
import Profile.Core.Interfaces.IProfileService;
import Profile.Core.Utils.Reusables;
import Profile.Entity.ProfileEntity;
import Profile.Repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileService implements IProfileService {

    private final ProfileRepository repository;

    @Override
    public void update(ProfileRequest request){
        String currentUserEmail = Reusables.getCurrentUsername();
        List<ProfileEntity> profiles = this.repository.findByUserEmail(currentUserEmail);

        ProfileEntity newProfile;

        if(profiles.isEmpty()){
            newProfile = new ProfileEntity();
            newProfile.setUserEmail(currentUserEmail);
        }else{
            newProfile = profiles.getFirst();
        }

        newProfile.setUserName(request.getUsername());
        newProfile.setPicture(request.getPicture());
        this.repository.save(newProfile);
    }

    @Override
    public ProfileEntity getCurrentUserProfile(){
        String currentUserEmail = Reusables.getCurrentUsername();
        return this.getProfile(currentUserEmail);
    }

    @Override
    public ProfileEntity getProfileByEmail(String email){
        return this.getProfile(email);
    }

    private ProfileEntity getProfile(String email){
        List<ProfileEntity> profiles = this.repository.findByUserEmail(email);

        return profiles.isEmpty() ? new ProfileEntity() : profiles.getFirst();
    }
}
