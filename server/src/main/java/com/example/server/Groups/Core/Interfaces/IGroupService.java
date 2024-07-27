package com.example.server.Groups.Core.Interfaces;

import com.example.server.Groups.Core.DataTransferObjects.GroupRequest;

public interface IGroupService {
    void createGroup(GroupRequest request);
}
