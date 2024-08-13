package Forum.Features.Forum.Model;

import Forum.Features.Forum.Core.Enums.ForumType;
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
@Table(name="forum")
public class ForumEntity {
    @Id
    private UUID id;
    @Column("user_email")
    private String userEmail;
    @Column("created")
    private LocalDate created;
    @Column("modified")
    private LocalDate modified;
    @Column("title")
    private String title;
    @Column("description")
    private String description;
    @Column("stars")
    private Long stars;
    @Column("reviews")
    private Long reviews;
    @Column("type")
    private ForumType type;
    @Column("is_removed")
    private Boolean isRemoved;
}
