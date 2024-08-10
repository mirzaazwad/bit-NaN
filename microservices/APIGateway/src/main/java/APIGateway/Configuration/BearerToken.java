package APIGateway.Configuration;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class BearerToken extends AbstractAuthenticationToken {

    private final String token;

    public BearerToken(String token) {
        super(null);
        this.token = token;
        setAuthenticated(false);
    }

    @Override
    public String getCredentials() {
        return token;
    }

    @Override
    public String getPrincipal() {
        return token;
    }
}
