package File.Service;

import File.Configuration.CloudinaryConfiguration;
import com.cloudinary.Cloudinary;
import File.Core.Interfaces.ICloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
public class CloudinaryService implements ICloudinaryService {
    private final Cloudinary cloudinary;

    @Autowired
    public CloudinaryService(Cloudinary cloudinary){
        this.cloudinary = cloudinary;
    }

    @Override
    public Map uploadFile(MultipartFile file) throws IOException {
        Map<String, Object> params = new HashMap<>(CloudinaryConfiguration.fileParams());
        params.put("public_id", CloudinaryConfiguration.constructFileUrl(file));
        Map uploadResult;
        try{
            uploadResult = cloudinary.uploader().upload(file.getBytes(), params);
        }catch (IOException e){
            throw new IOException("Error uploading file to Cloudinary", e);
        }

        return uploadResult;
    }
}
