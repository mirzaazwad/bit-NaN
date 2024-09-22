package Profile.Service;

import Profile.Core.DataTransferObjects.ProfileRequest;
import Profile.Core.Interfaces.IProfileService;
import Profile.Core.Utils.Reusables;
import Profile.Entity.ProfileEntity;
import Profile.Entity.ProgressEntity;
import Profile.Entity.UserProductEntity;
import Profile.Repository.ProfileRepository;
import Profile.Repository.ProgressRepository;
import Profile.Repository.UserProductsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileService implements IProfileService {

    private final ProfileRepository repository;
    private final UserProductsRepository productsRepository;
    private final ProgressRepository progressRepository;
    @Override
    public void update(ProfileRequest request){
        String currentUserEmail = Reusables.getCurrentUsername();
        List<ProfileEntity> profiles = this.repository.findByUserEmail(currentUserEmail);

        ProfileEntity newProfile;

        if(profiles.isEmpty()){
            newProfile = new ProfileEntity();
            newProfile.setUserEmail(currentUserEmail);
        }else{
            newProfile = profiles.getFirst();
        }

        newProfile.setUserName(request.getUsername());
        newProfile.setPicture(request.getPicture());
        this.repository.save(newProfile);
    }

    @Override
    public ProfileEntity getCurrentUserProfile(){
        String currentUserEmail = Reusables.getCurrentUsername();
        return this.getProfile(currentUserEmail);
    }

    @Override
    public ProfileEntity getProfileByEmail(String email){
        return this.getProfile(email);
    }

    @Override
    public void saveProduct(String productId) {

        if(!this.isEligibleToBuy()) return;

        List<UserProductEntity> productEntities = this.productsRepository.findByUserEmail(Reusables.getCurrentUsername());
        UserProductEntity productEntity;

        if(productEntities.isEmpty()){
            List<String> items = new ArrayList<>();
            items.add(productId);
            productEntity = UserProductEntity.builder()
                    .items(items)
                    .userEmail(Reusables.getCurrentUsername())
                    .build();
        }else{
            productEntity = productEntities.get(0);
            List<String> items = productEntity.getItems();
            items.add(productId);
            productEntity.setItems(items);
        }
        this.productsRepository.save(productEntity);
        this.updatePoints();
    }

    @Override
    public List<String> getProducts() {
        List<UserProductEntity> entities = this.productsRepository.findByUserEmail(Reusables.getCurrentUsername());
        return entities.isEmpty() ? null : entities.get(0).getItems();
    }

    private ProfileEntity getProfile(String email){
        List<ProfileEntity> profiles = this.repository.findByUserEmail(email);

        return profiles.isEmpty() ? new ProfileEntity() : profiles.getFirst();
    }

    private boolean isEligibleToBuy(){
        List<ProgressEntity> entities = this.progressRepository.findByUserEmail(Reusables.getCurrentUsername());
        if(entities.isEmpty()){
            return false;
        }else{
            ProgressEntity entity = entities.get(0);
            return entity.getPoints() >= 100;
        }
    }

    private void updatePoints(){
        ProgressEntity entity = this.progressRepository.findByUserEmail(Reusables.getCurrentUsername()).get(0);
        entity.setPoints(entity.getPoints() - 100);
        this.progressRepository.save(entity);
    }
}
