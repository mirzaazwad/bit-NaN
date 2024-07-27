package com.example.server.File.Service;

import com.example.server.File.Core.DataTransferObjects.FileRequest;
import com.example.server.File.Core.Utils.Reusables;
import com.example.server.File.Entity.FileEntity;
import com.example.server.File.Repositoy.FileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MongoDBService {
    private final FileRepository fileRepository;

    public void saveFileInfo(FileRequest fileRequest, String category, Map uploadResult) throws Exception{
        try{
            String user = Reusables.getCurrentUsername();
            String createdAtString = (String) uploadResult.get("created_at");
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
            Date createdAt = dateFormat.parse(createdAtString);
            FileEntity fileEntity = new FileEntity(
                    user,
                    fileRequest.getFile().getOriginalFilename(),
                    (String) uploadResult.get("url"),
                    createdAt,
                    category);
            fileRepository.save(fileEntity);
        } catch (ParseException e) {
            throw new Exception("Error parsing created_at date from upload result: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new Exception("Error saving file information to database: " + e.getMessage(), e);
        }
    }
}
