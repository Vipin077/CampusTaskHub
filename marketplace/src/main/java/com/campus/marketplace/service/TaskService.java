package com.campus.marketplace.service;

import com.campus.marketplace.model.Task;
import com.campus.marketplace.model.Task.TaskStatus;
import com.campus.marketplace.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // ==========================
    // CREATE TASK
    // ==========================
    public Task createTask(Task task) {

        task.setStatus(TaskStatus.OPEN);

        return taskRepository.save(task);
    }

    // ==========================
    // GET ALL TASKS
    // ==========================
    public List<Task> getAllTasks() {

        return taskRepository.findAll();
    }

    // ==========================
    // GET EXPLORE TASKS
    // ==========================
    public List<Task> getExploreTasks(String currentUserId) {

        return taskRepository
                .findByCreatedByNotAndStatus(
                        currentUserId,
                        TaskStatus.OPEN
                );
    }

    // ==========================
    // GET MY TASKS
    // ==========================
    public List<Task> getPostedTasks(String createdBy) {

        return taskRepository.findByCreatedBy(createdBy);
    }

    // ==========================
    // GET ACCEPTED TASKS
    // ==========================
    public Task acceptTask(
            String taskId,
            String userId
    ) {

        Task task = taskRepository
                .findById(taskId)
                .orElseThrow(() ->
                        new RuntimeException("Task not found"));

        if (task.getStatus() == TaskStatus.ACCEPTED) {

            throw new RuntimeException(
                    "Task already accepted"
            );
        }

        task.setAcceptedBy(userId);
        task.setStatus(TaskStatus.ACCEPTED);

        return taskRepository.save(task);
    }


    // ==========================
    // GET TASK BY ID
    // ==========================
    public Task getTaskById(String id) {

        return taskRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Task not found"));
    }

    // ==========================
    // OWNERSHIP CHECK
    // ==========================
    private void validateTaskOwner(
            Task task,
            String currentUserId) {

        if (!task.getCreatedBy().equals(currentUserId)) {

            throw new RuntimeException(
                    "You are not authorized to modify this task"
            );
        }
    }

    // ==========================
    // DELETE TASK
    // ==========================
    public void deleteTask(
            String id,
            String currentUserId) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Task not found"));

        validateTaskOwner(task, currentUserId);

        taskRepository.delete(task);
    }

    // ==========================
    // CLOSE TASK
    // ==========================
    public Task closeTask(
            String id,
            String currentUserId) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Task not found"));

        validateTaskOwner(task, currentUserId);

        task.setStatus(TaskStatus.CLOSED);

        return taskRepository.save(task);
    }

    // ==========================
    // UPDATE TASK
    // ==========================
    public Task updateTask(
            String id,
            Task updatedTask,
            String currentUserId) {

        Task existingTask = taskRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Task not found"));

        validateTaskOwner(existingTask, currentUserId);

        existingTask.setTitle(updatedTask.getTitle());
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setReward(updatedTask.getReward());
        existingTask.setDeadline(updatedTask.getDeadline());
        existingTask.setLocation(updatedTask.getLocation());
        existingTask.setCategory(updatedTask.getCategory());

        return taskRepository.save(existingTask);
    }
}