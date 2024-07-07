package com.example.server.Goals.Controller;

import com.example.server.Goals.Core.DataTypeObjects.TaskDto;
import com.example.server.Goals.Core.Utils.Reusables;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/goals")
@RequiredArgsConstructor
@Tag(name="Goals")
public class GoalController {

    @PostMapping("/create")
    public ResponseEntity<?> createTask(@RequestBody TaskDto taskDto){
        return ResponseEntity.ok(Reusables.getCurrentUsername());
    }
}
