package com.example.server.File.Controller;

import com.example.server.File.Core.DataTransferObjects.FileRequest;
import com.example.server.File.Core.Interfaces.ICloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/file")
@RequiredArgsConstructor
@Tag(name="Files")
public class FileController {

    private final ICloudinaryService service;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestBody FileRequest fileRequest){
        try{
            Map uploadResult = service.uploadFile(fileRequest.getFile());
            System.out.println(uploadResult);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error uploading file");
        }
    }
}
