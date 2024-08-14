package Forum.Features.Forum.Core.DataTypeObjects.Forum.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ForumDeleteResponse {
    private boolean success;
}
