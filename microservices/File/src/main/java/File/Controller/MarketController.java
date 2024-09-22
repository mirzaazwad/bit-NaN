package File.Controller;

import File.Core.DataTransferObjects.FileRequest;
import File.Core.Interfaces.ICloudinaryService;
import File.Core.Interfaces.IMarketService;
import File.Service.MongoDBService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/market")
@RequiredArgsConstructor
public class MarketController {

    private final ICloudinaryService service;
    private final MongoDBService mongoDBService;
    private final IMarketService marketService;

    @PostMapping(value = "/publish", consumes = {"multipart/form-data"})
    public ResponseEntity<?> publishAvatar(
            @RequestPart("file") MultipartFile file,
            @RequestPart("name") String name,
            @RequestPart("category") String category,
            @RequestPart("username") String username)
    {
        try{
            FileRequest fileRequest = new FileRequest(file, category);
            Map uploadResult = service.uploadFile(fileRequest.getFile());
            mongoDBService.saveFileInfo(fileRequest, category, uploadResult);
            String url = (String) uploadResult.get("url");
            marketService.save(url, name, username);
            return ResponseEntity.ok("Avatar saved successfully");
        }catch (Exception e){
            return ResponseEntity.status(500).body("Error uploading avatar " + e);
        }
    }

    @GetMapping("/")
    public ResponseEntity<?> fetchAll(){
        try{
            return ResponseEntity.ok(marketService.fetchAll());
        }catch(Exception e){
            return ResponseEntity.status(500).body("Error fetching avatars "+e);
        }
    }
}
