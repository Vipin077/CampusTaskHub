import axios from "axios";

const API = "http://localhost:8082/api/tasks";


// CREATE TASK
export const createTask = async (taskData) => {

    const response = await axios.post(
        `${API}/create`,
        taskData
    );

    return response.data;
};


// GET POSTED TASKS
export const getPostedTasks = async (createdBy) => {

    const response = await axios.get(
        `${API}/mytasks/${createdBy}`
    );

    return response.data;
};


// DELETE TASK
export const deleteTask = async (id) => {

    const response = await axios.delete(
        `${API}/delete/${id}`
    );

    return response.data;
};


// UPDATE TASK
export const updateTask = async (
    id,
    updatedTask
) => {

    const response = await axios.put(
        `${API}/update/${id}`,
        updatedTask
    );

    return response.data;
};


// CLOSE TASK
export const closeTask = async (id) => {

    const response = await axios.put(
        `${API}/close/${id}`
    );

    return response.data;
};


// GET ALL TASKS
export const getAllTasks = async () => {

    const response = await axios.get(
        `${API}/all`
    );

    return response.data;
};