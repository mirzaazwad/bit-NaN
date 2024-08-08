package APIGateway.Core.DataTypeObjects;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenVerificationResponse {
    private Boolean verified;
    private String message;
    public TokenVerificationResponse(String message) {
        this.verified = false;
        this.message = message;
    }
}
