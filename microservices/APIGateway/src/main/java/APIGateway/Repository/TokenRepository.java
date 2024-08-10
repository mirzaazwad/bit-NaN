package APIGateway.Repository;

import APIGateway.Model.TokenEntity;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

import java.util.Optional;

public interface TokenRepository extends ReactiveMongoRepository<TokenEntity,String> {
    Mono<TokenEntity> findByRefreshToken(String refreshToken);
    Mono<TokenEntity> findByAccessToken(String accessToken);
    Mono<TokenEntity> deleteByRefreshToken(String refreshToken);
}




