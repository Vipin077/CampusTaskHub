package com.campus.marketplace.controller;

import com.campus.marketplace.model.Task;
import com.campus.marketplace.model.User;
import com.campus.marketplace.repository.UserRepository;
import com.campus.marketplace.service.TaskService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserRepository userRepository;

    // ==========================
    // HELPER METHOD
    // ==========================
    private User getCurrentUser(
            Principal principal) {

        String email = principal.getName();

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));
    }

    // ==========================
    // CREATE TASK
    // ==========================
    @PostMapping("/create")
    public ResponseEntity<?> createTask(
             @Valid @RequestBody Task task,
            Principal principal) {

        System.out.println("5. CONTROLLER HIT");
        System.out.println("Principal = " + principal);

        try {

            User currentUser =
                    getCurrentUser(principal);

            task.setCreatedBy(currentUser.getId());
            task.setCreatedByName(currentUser.getName());

            Task createdTask =
                    taskService.createTask(task);

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(createdTask);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "success", false,
                            "message", "Task could not be created",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // GET ALL TASKS
    // ==========================
    @GetMapping("/all")
    public ResponseEntity<?> getAllTasks() {

        try {

            List<Task> tasks =
                    taskService.getAllTasks();

            return ResponseEntity.ok(tasks);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "success", false,
                            "message", "Could not fetch tasks",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // GET TASK BY ID
    // ==========================
    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(
            @PathVariable String id) {

        try {

            Task task =
                    taskService.getTaskById(id);

            return ResponseEntity.ok(task);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Map.of(
                            "success", false,
                            "message", "Task not found",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // GET MY TASKS
    // ==========================
    @GetMapping("/mytasks")
    public ResponseEntity<?> getMyTasks(
            Principal principal) {

        try {

            User currentUser =
                    getCurrentUser(principal);

            List<Task> tasks =
                    taskService.getPostedTasks(
                            currentUser.getId()
                    );

            return ResponseEntity.ok(tasks);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "success", false,
                            "message", "Could not fetch tasks",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // GET EXPLORE TASKS
    // ==========================
    @GetMapping("/explore")
    public ResponseEntity<?> exploreTasks(
            Principal principal) {

        try {

            User currentUser =
                    getCurrentUser(principal);

            List<Task> tasks =
                    taskService.getExploreTasks(
                            currentUser.getId()
                    );

            return ResponseEntity.ok(tasks);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "success", false,
                            "message", "Could not fetch tasks",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // ACCEPT TASK
    // ==========================
    @PostMapping("/{taskId}/accept")
    public ResponseEntity<?> acceptTask(
            @PathVariable String taskId,
            Principal principal
    ) {

        try {

            User currentUser =
                    getCurrentUser(principal);

            Task task =
                    taskService.acceptTask(
                            taskId,
                            currentUser.getId()
                    );

            return ResponseEntity.ok(task);

        } catch (Exception e) {

            return ResponseEntity.badRequest()
                    .body(Map.of(
                            "message",
                            e.getMessage()
                    ));
        }
    }


    // ==========================
    // UPDATE TASK
    // ==========================
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateTask(
            @PathVariable String id,
            @RequestBody Task task,
            Principal principal) {

        try {

            User currentUser =
                    getCurrentUser(principal);

            Task updatedTask =
                    taskService.updateTask(
                            id,
                            task,
                            currentUser.getId()
                    );

            return ResponseEntity.ok(updatedTask);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body(Map.of(
                            "success", false,
                            "message", "Task update failed",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // CLOSE TASK
    // ==========================
    @PutMapping("/close/{id}")
    public ResponseEntity<?> closeTask(
            @PathVariable String id,
            Principal principal) {

        try {

            User currentUser =
                    getCurrentUser(principal);

            Task closedTask =
                    taskService.closeTask(
                            id,
                            currentUser.getId()
                    );

            return ResponseEntity.ok(closedTask);

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body(Map.of(
                            "success", false,
                            "message", "Task close failed",
                            "error", e.getMessage()
                    ));
        }
    }

    // ==========================
    // DELETE TASK
    // ==========================
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTask(
            @PathVariable String id,
            Principal principal) {

        try {

            User currentUser =
                    getCurrentUser(principal);

            taskService.deleteTask(
                    id,
                    currentUser.getId()
            );

            return ResponseEntity.ok(
                    Map.of(
                            "success", true,
                            "message", "Task deleted successfully"
                    )
            );

        } catch (Exception e) {

            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body(Map.of(
                            "success", false,
                            "message", "Task delete failed",
                            "error", e.getMessage()
                    ));
        }
    }
}