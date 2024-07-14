package com.example.server.Core.Utils;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class Reusables {
     public static String getCurrentUsername() {
         UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
         return userDetails.getUsername();
     }
}
