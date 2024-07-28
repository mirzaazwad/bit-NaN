package com.example.server.Profile.Core.Interfaces;

import com.example.server.Profile.Core.DataTransferObjects.ProfileRequest;

public interface IProfileService {
    void update(ProfileRequest request);
}
