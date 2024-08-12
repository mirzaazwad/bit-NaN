package Forum.Configuration;

import org.apache.hc.core5.http.HttpHost;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.autoconfigure.web.client.RestClientBuilderConfigurer;
import org.springframework.boot.web.client.ClientHttpRequestFactories;
import org.springframework.boot.web.client.ClientHttpRequestFactorySettings;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestClientAutoConfiguration {
    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public RestClientBuilderConfigurer restClientBuilderConfigurer() {
        return new RestClientBuilderConfigurer();
    }

    @Bean
    RestClient.Builder restClientBuilder(RestClientBuilderConfigurer restClientBuilderConfigurer) {
        RestClient.Builder clientBuilder = RestClient.builder().requestFactory(ClientHttpRequestFactories.get(ClientHttpRequestFactorySettings.DEFAULTS));
        return restClientBuilderConfigurer.configure(clientBuilder);
    }
}
