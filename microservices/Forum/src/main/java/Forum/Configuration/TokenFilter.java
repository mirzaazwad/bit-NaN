package Forum.Configuration;

import Forum.CoreUtils.Reusables;
import lombok.NonNull;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Configuration
public class TokenFilter implements WebFilter {

    @Override
    @NonNull
    public Mono<Void> filter(ServerWebExchange exchange,@NonNull WebFilterChain chain) {
        String authorizationHeader =exchange.getRequest().getHeaders().getFirst("Authorization");
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token=authorizationHeader.substring(7);
            Reusables.setToken(token);
            return chain.filter(exchange);
        }
        else{
            throw new RuntimeException("Invalid Authorization Token");
        }
    }
}
