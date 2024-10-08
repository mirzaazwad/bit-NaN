package Chat.Core.Utils;

import Chat.Service.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Reusables {

    private static String token;
    private static JWTService jwtService;

    @Autowired
    public Reusables(JWTService jwtService) {
        Reusables.jwtService = jwtService;
    }

     public static String getCurrentUsername() {
         return jwtService.extract(token);
     }

     public static void setToken(String token) {
         Reusables.token = token;
     }
}
