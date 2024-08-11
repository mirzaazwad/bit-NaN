package Groups.Service;

import Groups.Core.DataTransferObjects.GroupsRequest;
import Groups.Core.Interfaces.IGroupsService;
import Groups.Core.Utils.Reusables;
import Groups.Entity.GroupsEntity;
import Groups.Repository.GroupsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GroupsService implements IGroupsService {
    private final GroupsRepository GroupsRepository;
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
}
