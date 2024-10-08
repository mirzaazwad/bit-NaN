package Forum.Features.Comments.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@Builder
@Table(name="chat_comments")
public class ChatCommentsEntity {
    @Id
    private UUID id;
    @Column("chat_id")
    private UUID chatId;
    @Column("user_email")
    private String userEmail;
    @Column("comment")
    private String comment;
    @Column("upvotes")
    private Long upvotes;
    @Column("downvotes")
    private Long downvotes;
    @Column("created")
    private LocalDate created;
    @Column("modified")
    private LocalDate modified;
    @Column("is_removed")
    private Boolean isRemoved;
}
