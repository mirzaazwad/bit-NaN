package APIGateway.Core.DataTypeObjects;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String access;
    private String refresh;
    private String message;

    public AuthenticationResponse(String message){
        this.message = message;
    }
}
