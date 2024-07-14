package APIGateway.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173","http://localhost:3000","http://localhost:5174")
                .allowedMethods(HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.PATCH.name(),
                        HttpMethod.TRACE.name(),
                        HttpMethod.OPTIONS.name(),
                        HttpMethod.DELETE.name(),
                        HttpMethod.HEAD.name())
                .allowedHeaders(
                        HttpHeaders.CONTENT_TYPE,
                        HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS,
                        HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN,
                        HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS,
                        HttpHeaders.ACCEPT,
                        HttpHeaders.AGE,
                        HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD,
                        HttpHeaders.ALLOW,
                        HttpHeaders.CACHE_CONTROL,
                        HttpHeaders.CONTENT_LENGTH,
                        HttpHeaders.COOKIE,
                        HttpHeaders.AUTHORIZATION);
    }


}
