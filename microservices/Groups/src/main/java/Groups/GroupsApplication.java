package Groups;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class GroupsApplication {

	public static void main(String[] args) {
		SpringApplication.run(GroupsApplication.class, args);
	}

}
