package Forum.Features.Chat.Model;

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
@Table(name = "chat_downvotes")
public class ChatDownvotesEntity {
    @Id
    private UUID id;
    @Column("chat_id")
    private UUID chatId;
    @Column("user_email")
    private String userEmail;
    @Column("created")
    private LocalDate created;
}
