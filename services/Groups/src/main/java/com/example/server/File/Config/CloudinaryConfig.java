package com.example.server.File.Config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Value("${application.security.CLOUDINARY_URL}")
    private String cloudinaryUrl;

    @Bean
    public Cloudinary cloudinary(){
        return new Cloudinary(cloudinaryUrl);
    }

    // TODO: CHANCE THIS CONFIGURATION AS NECESSARY LATER
    public static Map fileParams(){
        return ObjectUtils.asMap(
                "use_filename", true,
                "unique_filename", false,
                "overwrite", false
        );
    }
}
