package Forum.Features.Forum.Core.DataTypeObjects.ForumStars.Response;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class StarsFindByUserResponse {
    private Boolean starred;
    private UUID id;
}
