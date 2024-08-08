package APIGateway.Configuration;

import APIGateway.Service.JWTService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.ReactiveUserDetailsService;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;


@AllArgsConstructor
@Component
public class AuthenticationManager implements ReactiveAuthenticationManager {

    private final JWTService jwtService;
    private final ReactiveUserDetailsService users;

    @Override
    public Mono<Authentication> authenticate(Authentication authentication) {
        return Mono.justOrEmpty(authentication)
                .filter(auth -> auth instanceof BearerToken)
                .cast(BearerToken.class)
                .flatMap(auth -> {
                    String username = jwtService.extract(auth.getCredentials());
                    return users.findByUsername(username)
                            .switchIfEmpty(Mono.error(new IllegalArgumentException("User not found")))
                            .flatMap(userDetails -> {
                                if (jwtService.isTokenValid(auth.getCredentials(), userDetails)) {
                                    return Mono.just(new UsernamePasswordAuthenticationToken(
                                            userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities()));
                                } else {
                                    return Mono.error(new IllegalArgumentException("Invalid token"));
                                }
                            });
                });
    }
}
