package Profile.Core.DataTransferObjects;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProfileRequest {
    @Builder.Default
    private String username = "";

    @Builder.Default
    private String picture = "";
}
