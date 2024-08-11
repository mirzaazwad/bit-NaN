package APIGateway.Core.DataTypeObjects;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {
    private String access;
    private String message;

    public TokenResponse(String message) {
        this.access = null;
        this.message = message;
    }
}
