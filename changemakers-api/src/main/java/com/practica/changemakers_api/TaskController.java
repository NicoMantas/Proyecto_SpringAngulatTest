package com.practica.changemakers_api;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {
    private final List<Map<String, Object>> tasks = new ArrayList<>(List.of(
            Map.of("id", 1, "title", "Configurar Antigravity y Git", "status", "Dev"),
            Map.of("id", 2, "title", "Validar Selenium WebDriver", "status", "In_Progress")));

    @GetMapping
    public List<Map<String, Object>> getTasks() {
        return tasks;
    }

    @PostMapping
    public Map<String, Object> AddTask(@RequestBody Map<String, Object> newTask) {
        Map<String, Object> task = new HashMap<>(newTask);
        task.put("id", tasks.size() + 1);
        tasks.add(task);
        return task;
    }

}
