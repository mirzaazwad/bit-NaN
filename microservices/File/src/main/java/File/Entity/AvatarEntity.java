package File.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "avatars")
public class AvatarEntity {
    @Id
    private String id;
    @Field
    private String name;
    @Field
    private String url;
    @Field
    private String uploaderEmail;
    @Field
    private String uploaderName;
}
