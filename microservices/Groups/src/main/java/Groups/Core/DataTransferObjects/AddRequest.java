package Groups.Core.DataTransferObjects;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddRequest {
    private String groupId;
    @Builder.Default
    private List<String> users = new ArrayList<>();
}
