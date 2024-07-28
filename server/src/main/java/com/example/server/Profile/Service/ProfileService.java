package com.example.server.Profile.Service;

import com.example.server.Profile.Core.DataTransferObjects.ProfileRequest;
import com.example.server.Profile.Core.Interfaces.IProfileService;
import com.example.server.Profile.Core.Utils.Reusables;
import com.example.server.Profile.Entity.ProfileEntity;
import com.example.server.Profile.Repository.ProfileRepository;
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
            newProfile = profiles.get(0);
        }

        newProfile.setUserName(request.getUsername());
        newProfile.setPicture(request.getPicture());
        this.repository.save(newProfile);
    }


}
