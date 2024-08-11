package APIGateway.Repository;

import APIGateway.Model.UserEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import reactor.core.publisher.Mono;

public interface UserRepository  extends ReactiveMongoRepository<UserEntity,String> {
    Mono<UserDetails> findByEmail(Object email);
}
