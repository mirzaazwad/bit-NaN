package Forum.Lib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Reusables {

    private static String token;
    private static JWThandler jwThandler;

    @Autowired
    public Reusables(JWThandler jwThandler) {
        Reusables.jwThandler = jwThandler;
    }

     public static String getCurrentUsername() {
         return jwThandler.extract(token);
     }

     public static void setToken(String token) {
         Reusables.token = token;
     }
}
