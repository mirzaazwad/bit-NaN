package Groups.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "groups")
public class GroupsEntity {
    @Id
    private String id;
    @Field
    private String name;
    @Field
    private List<String> users;
    @Field
    @Builder.Default
    private String picture = null;
}
