package Chat.Configuration;

import Chat.Core.Utils.Reusables;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
public class TokenFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException,ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String authorizationHeader=httpRequest.getHeader("Authorization");
        String servletPath = httpRequest.getServletPath();
        System.out.println("Path: "+servletPath);
        if (servletPath.matches("/(ws|socket).*")) {
            filterChain.doFilter(request, response);
            return;
        }
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
