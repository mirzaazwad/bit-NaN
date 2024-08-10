package File.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "files")
public class FileEntity {
    @Id
    private String id;
    @Field
    private String user;
    @Field
    private String name;
    @Field
    private String url;
    @Field
    private Date uploadDateTime;
    @Field
    private String category;

    public FileEntity(String user, String name, String url, Date uploadDateTime, String category) {
        this.user = user;
        this.name = name;
        this.url = url;
        this.uploadDateTime = uploadDateTime;
        this.category = category;
    }
}
