package APIGateway.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;


@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Mirza Mohammad Azwad",
                        email = "mirzaazwad@iut-dhaka.edu",
                        url = ""
                ),
                description = "OpenApi documentation for BIT by Team NaN",
                title = "OpenApi specification - BIT",
                version = "1.0.0",
                license = @License(
                        name = "MIT",
                        url = "https://github.com/mirzaazwad/bit-NaN/blob/main/LICENSE"
                ),
                termsOfService = "Terms of service"
        ),
        servers = {
                @Server(
                        description = "API Gateway",
                        url = "http://localhost:8081"
                ),
        }
)
public class OpenAPIConfiguration {

}
