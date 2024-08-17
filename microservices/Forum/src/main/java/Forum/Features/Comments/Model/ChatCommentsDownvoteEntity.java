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
@Table(name="chat_comment_downvotes")
public class ChatCommentsDownvoteEntity {
    @Id
    private UUID id;
    @Column("comment_id")
    private UUID commentId;
    @Column("user_email")
    private String userEmail;
    @Column("created")
    private LocalDate created;
}
