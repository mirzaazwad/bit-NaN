package Groups.Service;

import Groups.Core.DataTransferObjects.FileUploadRequest;
import Groups.Core.DataTransferObjects.GroupsRequest;
import Groups.Core.Interfaces.IGroupsService;
import Groups.Core.Utils.Reusables;
import Groups.Entity.GroupFilesEntity;
import Groups.Entity.GroupsEntity;
import Groups.Repository.GroupFilesRepository;
import Groups.Repository.GroupsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupsService implements IGroupsService {
    private final GroupsRepository GroupsRepository;
    private final GroupFilesRepository groupFilesRepository;
    @Override
    public void createGroup(GroupsRequest request){
        request.getUsers().add(Reusables.getCurrentUsername());
        GroupsEntity Groups = GroupsEntity.builder()
                .name(request.getName())
                .users(request.getUsers())
                .picture(request.getPicture())
                .build();
        this.GroupsRepository.save(Groups);
    }

    @Override
    public List<GroupsEntity> fetchGroups(){
        return GroupsRepository.findAllByUsersContaining(Reusables.getCurrentUsername());
    }

    @Override
    public void uploadFile(FileUploadRequest request) {
        List<GroupFilesEntity> entities = this.groupFilesRepository.findByGroupId(request.getGroupId());
        GroupFilesEntity newEntity;
        List<String> urls;
        if(entities.isEmpty()){
            urls = new ArrayList<>();
            urls.add(request.getUrl());
            newEntity = GroupFilesEntity.builder()
                    .groupId(request.getGroupId())
                    .urls(urls)
                    .build();
        }else{
            newEntity = entities.get(0);
            urls = newEntity.getUrls();
            urls.add(request.getUrl());
            newEntity.setUrls(urls);
        }
        this.groupFilesRepository.save(newEntity);
    }

    @Override
    public List<String> getFiles(String id) {
        List<GroupFilesEntity> entities = this.groupFilesRepository.findByGroupId(id);
        if(!entities.isEmpty() && !entities.get(0).getUrls().isEmpty()){
            return entities.get(0).getUrls();
        }
        return new ArrayList<>();
    }
}
