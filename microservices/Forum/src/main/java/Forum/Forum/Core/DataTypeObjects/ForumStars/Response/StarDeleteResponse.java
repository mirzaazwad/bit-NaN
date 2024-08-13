package Forum.Forum.Core.DataTypeObjects.ForumStars.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StarDeleteResponse {
    private Boolean success;
}
