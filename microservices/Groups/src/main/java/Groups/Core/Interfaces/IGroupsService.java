package Groups.Core.Interfaces;

import Groups.Core.DataTransferObjects.GroupsRequest;
import Groups.Entity.GroupsEntity;

import java.util.List;

public interface IGroupsService {
    void createGroup(GroupsRequest request);
    List<GroupsEntity> fetchGroups();
}
