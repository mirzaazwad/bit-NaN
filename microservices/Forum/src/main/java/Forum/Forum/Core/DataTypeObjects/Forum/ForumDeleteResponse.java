package Forum.Forum.Core.DataTypeObjects.Forum;

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
