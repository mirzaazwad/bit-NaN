package Forum.Configuration;

import Forum.Lib.Reusables;
import lombok.NonNull;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Configuration
public class TokenFilter implements WebFilter {

    @Override
    @NonNull
    public Mono<Void> filter(ServerWebExchange exchange,@NonNull WebFilterChain chain) {
        String authorizationHeader =exchange.getRequest().getHeaders().getFirst("Authorization");
        var request = exchange.getRequest();
        System.out.printf("%s:\tMethod: %s, URI: %s\n", (new Date()),request.getMethod(),request.getURI());
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
