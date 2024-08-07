package com.example.server.Profile.Core.Interfaces;

import com.example.server.Profile.Core.DataTransferObjects.ProfileRequest;
import com.example.server.Profile.Entity.ProfileEntity;

public interface IProfileService {
    void update(ProfileRequest request);
    ProfileEntity getCurrentUserProfile();
}
