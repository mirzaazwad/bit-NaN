package Groups.Core.Interfaces;

import Groups.Core.DataTransferObjects.FileUploadRequest;
import Groups.Core.DataTransferObjects.GroupsRequest;
import Groups.Entity.GroupsEntity;

import java.io.File;
import java.util.List;

public interface IGroupsService {
    void createGroup(GroupsRequest request);
    List<GroupsEntity> fetchGroups();
    void uploadFile(FileUploadRequest request);
    List<String> getFiles(String id);
}
