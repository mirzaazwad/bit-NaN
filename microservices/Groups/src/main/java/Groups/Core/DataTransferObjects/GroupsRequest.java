package Groups.Core.DataTransferObjects;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GroupsRequest {
    private String name;

    @Builder.Default
    private List<String> users = new ArrayList<>();

    @Builder.Default
    private String picture = null;

}
