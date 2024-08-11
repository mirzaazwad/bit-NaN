package Goals.Configuration;

import Goals.Core.Utils.Reusables;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
public class TokenFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException,ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String authorizationHeader=httpRequest.getHeader("Authorization");
        if(authorizationHeader==null || !authorizationHeader.startsWith("Bearer ")){
            throw new ServletException("Invalid Authorization Token");
        }
        else{
            String token=authorizationHeader.substring(7);
            Reusables.setToken(token);
            filterChain.doFilter(request, response);
        }
    }
}
