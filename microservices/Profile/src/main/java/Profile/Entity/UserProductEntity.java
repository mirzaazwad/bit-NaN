package Profile.Entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "userproducts")
public class UserProductEntity {
    @Id
    private String id;
    @Field
    private String userEmail;
    @Field
    private List<String> items;
}
