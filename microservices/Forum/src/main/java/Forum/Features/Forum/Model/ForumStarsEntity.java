package Forum.Features.Forum.Model;

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
@Table(name="forum_stars")
public class ForumStarsEntity {
    @Id
    private UUID id;
    @Column("forum_id")
    private UUID forumId;
    @Column("user_email")
    private String userEmail;
    @Column("created")
    private LocalDate created;
    @Column("modified")
    private LocalDate modified;
}