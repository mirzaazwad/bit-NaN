package com.example.server.File.Controller;

import com.example.server.File.Core.DataTransferObjects.FileRequest;
import com.example.server.File.Core.Interfaces.ICloudinaryService;
import com.example.server.File.Service.MongoDBService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/files")
@RequiredArgsConstructor
@Tag(name="Files")
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
