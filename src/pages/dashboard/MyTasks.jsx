import { useEffect, useState } from "react";

import CreateTaskForm
from "../../components/mytasks/CreateTaskForm";

import PostedTasks
from "../../components/mytasks/PostedTask";

import EditTaskModal
from "../../components/mytasks/EditTaskModal";

import TaskAnalytics
from "../../components/mytasks/TaskAnalytics";

import ViewResponses
from "../../components/mytasks/ViewResponses";

import {
    getPostedTasks,
    deleteTask,
    closeTask
}
from "../../services/taskService";

const MyTasks = () => {

    // =========================
    // STATES
    // =========================

    const [tasks, setTasks] = useState([]);

    const [selectedTask, setSelectedTask]
        = useState(null);

    const [isEditOpen, setIsEditOpen]
        = useState(false);

    const [responseTask, setResponseTask]
        = useState(null);

    // Logged in user
    const createdBy = "vipin123";



    // =========================
    // FETCH TASKS
    // =========================

    useEffect(() => {

        fetchTasks();

    }, []);


    const fetchTasks = async () => {

        try {

            const data =
                await getPostedTasks(createdBy);

            setTasks(data);

        } catch (error) {

            console.log(error);
        }
    };



    // =========================
    // DELETE TASK
    // =========================

    const handleDelete = async (id) => {

        try {

            await deleteTask(id);

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };



    // =========================
    // CLOSE TASK
    // =========================

    const handleCloseTask = async (id) => {

        try {

            await closeTask(id);

            fetchTasks();

        } catch (error) {

            console.log(error);
        }
    };



    // =========================
    // OPEN EDIT MODAL
    // =========================

    const handleEdit = (task) => {

        setSelectedTask(task);

        setIsEditOpen(true);
    };



    // =========================
    // VIEW RESPONSES
    // =========================

    const handleViewResponses = (task) => {

        setResponseTask(task);
    };



    // =========================
    // UI
    // =========================

    return (

        <div className="p-6">

            {/* PAGE TITLE */}

            <h1 className="text-3xl font-bold mb-6">
                My Tasks Dashboard
            </h1>



            {/* CREATE TASK FORM */}

            <CreateTaskForm
                refreshTasks={fetchTasks}
            />



            {/* ANALYTICS */}

            <TaskAnalytics
                tasks={tasks}
            />



            {/* POSTED TASKS */}

            <PostedTasks
                tasks={tasks}

                onEdit={handleEdit}

                onDelete={handleDelete}

                onClose={handleCloseTask}

                onViewResponses={handleViewResponses}
            />



            {/* EDIT MODAL */}

            {
                isEditOpen && (

                    <EditTaskModal

                        task={selectedTask}

                        closeModal={() =>
                            setIsEditOpen(false)
                        }

                        refreshTasks={fetchTasks}
                    />
                )
            }



            {/* VIEW RESPONSES */}

            {
                responseTask && (

                    <ViewResponses
                        task={responseTask}
                    />
                )
            }

        </div>
    );
};
export default MyTasks;

