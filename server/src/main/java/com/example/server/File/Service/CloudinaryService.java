package com.example.server.File.Service;

import com.cloudinary.Cloudinary;
import com.example.server.File.Config.CloudinaryConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {
    private final Cloudinary cloudinary;

    @Autowired
    public CloudinaryService(Cloudinary cloudinary){
        this.cloudinary = cloudinary;
    }

    public Map uploadFile(MultipartFile file) throws IOException {
        Map uploadResult;
        try{
            uploadResult = cloudinary.uploader().upload(file.getBytes(), CloudinaryConfig.fileParams());
        }catch (IOException e){
            throw new IOException("Error uploading file to Cloudinary", e);
        }

        return uploadResult;
    }
}
