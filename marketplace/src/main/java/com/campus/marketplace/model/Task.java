package com.campus.marketplace.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Document(collection = "tasks")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Task {

    @Id
    private String id;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Reward is required")
    @Min(value = 1, message = "Reward must be greater than 0")
    private Integer reward;

    @NotNull(message = "Deadline is required")
    @Future(message = "Deadline must be a future date")
    private LocalDate deadline;

    @NotBlank(message = "Location is required")
    private String location;

    @NotBlank(message = "Category is required")
    private String category;

    // User ObjectId

    private String createdBy;

    // Username snapshot
    private String createdByName;

    // Optional file attachment
    private String attachmentUrl;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

  // Optional field to track who accepted the task
    private String acceptedBy;

    @Builder.Default
    private TaskStatus status = TaskStatus.OPEN;

    public enum TaskStatus {

        OPEN,
        ASSIGNED,
        COMPLETED,
        ACCEPTED, CLOSED

    }
}