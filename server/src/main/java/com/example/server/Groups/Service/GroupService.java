package com.example.server.Groups.Service;

import com.example.server.Groups.Core.DataTransferObjects.GroupRequest;
import com.example.server.Groups.Core.Interfaces.IGroupService;
import com.example.server.Groups.Core.Utils.Reusables;
import com.example.server.Groups.Entity.GroupEntity;
import com.example.server.Groups.Repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupService implements IGroupService {
    private final GroupRepository groupRepository;
    @Override
    public void createGroup(GroupRequest request){
        request.getUsers().add(Reusables.getCurrentUsername());
        GroupEntity group = GroupEntity.builder()
                .name(request.getName())
                .users(request.getUsers())
                .picture(request.getPicture())
                .build();
        this.groupRepository.save(group);
    }
    @Override
    public List<GroupEntity> fetchGroups(){
        return groupRepository.getAllByUsersContains(Reusables.getCurrentUsername());
    }
}
