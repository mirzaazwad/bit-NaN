package File.Controller;

import File.Core.DataTransferObjects.FileRequest;
import File.Core.Interfaces.ICloudinaryService;
import File.Service.MongoDBService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/files")
@RequiredArgsConstructor
public class FileController {

    private final ICloudinaryService service;
    private final MongoDBService mongoDBService;

    @PostMapping(value = "/upload", consumes = {"multipart/form-data"})
    public ResponseEntity<?> uploadFile(@RequestPart("file") MultipartFile file, @RequestParam("category") String category){
        try{
            FileRequest fileRequest = new FileRequest(file, category);
            Map uploadResult = service.uploadFile(fileRequest.getFile());
            mongoDBService.saveFileInfo(fileRequest, category, uploadResult);

            Map<String, Object> responseObj = new HashMap<>();
            responseObj.put("url", uploadResult.get("url"));
            responseObj.put("message", "File uploaded successfully");
            return ResponseEntity.ok(responseObj);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error uploading file "+e);
        }
    }
}
