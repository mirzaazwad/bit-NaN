package Forum.Chat.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Date;

@Data
@AllArgsConstructor
@Builder
@Table(name="chat")
public class ChatEntity {
    @Id
    private String id;
    @Column("forum_id")
    private String forumId;
    @Column("user_email")
    private String userEmail;
    @Column("prompt")
    private String prompt;
    @Column("response")
    private String response;
    @Column("created")
    private Date created;
    @Column("upvotes")
    private Long upvotes;
    @Column("downvotes")
    private Long downvotes;
    @Column("comments")
    private Long comments;
    @Column("is_removed")
    private Boolean isRemoved;
}
