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
@Table(name="chat_comments")
public class ChatCommentsEntity {
    @Id
    private String id;
    @Column("chat_id")
    private String chatId;
    @Column("user_email")
    private String userEmail;
    @Column("comment")
    private String comment;
    @Column("created")
    private Date created;
    @Column("modified")
    private Date modified;
    @Column("is_removed")
    private Boolean isRemoved;
}
