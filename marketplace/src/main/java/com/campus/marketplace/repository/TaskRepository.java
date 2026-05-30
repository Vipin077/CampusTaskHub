package com.campus.marketplace.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.campus.marketplace.model.Task;
import com.campus.marketplace.model.Task.TaskStatus;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {

    List<Task> findByCreatedBy(String createdBy);

    List<Task> findByStatus(TaskStatus status);

    List<Task> findByCategory(String category);

    List<Task> findByCreatedByAndStatus(
            String createdBy,
            TaskStatus status
    );

    //wo sabhi task find karna jo user ne nahi banaya hai
    List<Task> findByCreatedByNot(String createdBy);

    //wo sabhi task find karna jo user ne accept kiya hai
    List<Task> findByAcceptedBy(String acceptedBy);

    // wo task hatana jo user ne accept kiya hai
    List<Task> findByCreatedByNotAndStatus(
            String createdBy,
            TaskStatus status
    );
}