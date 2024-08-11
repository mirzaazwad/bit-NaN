package com.example.server.Groups.Core.Interfaces;

import com.example.server.Groups.Core.DataTransferObjects.GroupRequest;
import com.example.server.Groups.Entity.GroupEntity;

import java.util.List;

public interface IGroupService {
    void createGroup(GroupRequest request);
    List<GroupEntity> fetchGroups();
}
