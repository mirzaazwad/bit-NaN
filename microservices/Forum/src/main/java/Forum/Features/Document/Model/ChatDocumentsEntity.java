package Forum.Features.Document.Model;

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
@Table(name="chat_documents")
public class ChatDocumentsEntity {
    @Id
    private UUID id;
    @Column("forum_id")
    private UUID forumId;
    @Column("user_email")
    private String userEmail;
    @Column("url")
    private String url;
    @Column("created")
    private LocalDate created;
    @Column("is_removed")
    private Boolean isRemoved;
}
