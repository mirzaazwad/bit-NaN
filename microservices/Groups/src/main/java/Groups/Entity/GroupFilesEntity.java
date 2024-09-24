package Groups.Entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "groupfiles")
public class GroupFilesEntity {
    @Id
    private String id;
    @Field
    private String groupId;
    @Field
    private List<String> urls;
}
