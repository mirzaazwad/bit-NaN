package Forum.Features.Document.Core.Utils;

import Forum.Features.Document.Core.Configuration.CloudinaryConfiguration;
import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;



public abstract class FileService {
    @Autowired
    protected Cloudinary cloudinary;

    protected Map uploadFile(MultipartFile file) throws IOException {
        Map<String, Object> params = new HashMap<String,Object>(CloudinaryConfiguration.fileParams());
        params.put("public_id", CloudinaryConfiguration.constructFileUrl(file));
        try{
            return cloudinary.uploader().upload(file.getBytes(), params);
        }catch (IOException e){
            throw new IOException("Error uploading file to Cloudinary", e);
        }
    }
}
