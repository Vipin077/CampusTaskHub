import { useEffect, useState } from "react";

import EditTaskModal from "./EditTaskModal";

import axios from "axios";

import { motion } from "framer-motion";

import {
  Briefcase,
  Calendar,
  IndianRupee,
  MapPin,
  Layers,
  Loader2,
  Sparkles,
} from "lucide-react";

function PostedTasks() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showEditModal, setShowEditModal] =
  useState(false);

const [selectedTask, setSelectedTask] =
  useState(null);

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");


      const response = await axios.get(
        `http://localhost:8082/api/tasks/mytasks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data);

    }
    catch (error) {

      console.error(error);

    }
    finally {

      setLoading(false);

    }

  };

  const handleDelete = async (taskId) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:8082/api/tasks/delete/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

   setTasks(prev =>
   prev.filter(task => task.id !== taskId)
);

  } catch (error) {

    console.error(error);

    alert("Failed to delete task");

  }
};


  if (loading) {

    return (

      <div className="
        flex
        items-center
        justify-center
        py-20
      ">

        <Loader2
          className="animate-spin text-pink-500"
          size={45}
        />

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Heading */}
      <div className="flex items-center gap-4">

        <div className="
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-r
          from-pink-500
          to-purple-600
          flex
          items-center
          justify-center
          shadow-lg
        ">

          <Sparkles className="text-white" size={28} />

        </div>

        <div>

          <h1 className="
            text-4xl
            font-black
            text-white
          ">
            Posted Tasks
          </h1>

          <p className="text-gray-400 mt-1">
            All tasks posted by you appear here.
          </p>

        </div>

      </div>

      {/* Empty State */}
      {
        tasks.length === 0 && (

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
              backdrop-blur-xl
            "
          >

            <Briefcase
              className="mx-auto text-pink-400 mb-4"
              size={60}
            />

            <h2 className="
              text-2xl
              font-bold
              text-white
            ">
              No Tasks Posted Yet
            </h2>

            <p className="text-gray-400 mt-3">
              Your created tasks will appear here 🚀
            </p>

          </motion.div>

        )
      }

      {/* Tasks */}
      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
      ">

        {
          tasks.map((task, index) => (

            <motion.div

              key={task.id}

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.1,
              }}

              whileHover={{
                y: -6,
              }}

              className="
                relative
                overflow-hidden
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-[30px]
                p-7
                shadow-[0_20px_60px_rgba(168,85,247,0.12)]
                transition-all
              "
            >

              {/* Glow */}
             <div className="
  absolute
  inset-0
  pointer-events-none
  bg-gradient-to-r
  from-pink-500/10
  via-purple-500/10
  to-cyan-500/10
  opacity-0
  hover:opacity-100
  transition-all
" />

              <div className="relative z-10">

                {/* Title */}
                <div className="
                  flex
                  items-start
                  justify-between
                  gap-4
                ">

                  <div>

                    <h2 className="
                      text-2xl
                      font-bold
                      text-white
                    ">
                      {task.title}
                    </h2>

                    <p className="
                      text-gray-400
                      mt-2
                      line-clamp-2
                    ">
                      {task.description}
                    </p>

                  </div>

                 <span
  className={`
    px-4
    py-2
    rounded-full
    text-sm
    font-semibold
    border
    ${
      task.status === "OPEN"
        ? "bg-green-500/20 text-green-400 border-green-500/20"
        : task.status === "ASSIGNED"
        ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/20"
        : task.status === "COMPLETED"
        ? "bg-blue-500/20 text-blue-400 border-blue-500/20"
        : "bg-red-500/20 text-red-400 border-red-500/20"
    }
  `}
>
  {task.status}
</span>

                </div>

                {/* Info */}
                <div className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-5
                ">

                  <div className="
                    bg-white/5
                    rounded-2xl
                    p-4
                    border
                    border-white/5
                  ">

                    <div className="
                      flex
                      items-center
                      gap-2
                      text-yellow-400
                      mb-2
                    ">

                      <IndianRupee size={18} />

                      <span className="text-sm">
                        Reward
                      </span>

                    </div>

                    <h3 className="
                      text-xl
                      font-bold
                      text-white
                    ">
                      ₹{task.reward}
                    </h3>

                  </div>

                  <div className="
                    bg-white/5
                    rounded-2xl
                    p-4
                    border
                    border-white/5
                  ">

                    <div className=" flex
                      items-center
                      gap-2
                      text-purple-400
                      mb-2
                    ">

                      <Calendar size={18} />

                      <span className="text-sm">
                        Deadline
                      </span>

                    </div>

                    <h3 className="
                      text-white
                      font-semibold
                    ">
                      {task.deadline}
                    </h3>

                  </div>

                  <div className="
                    bg-white/5
                    rounded-2xl
                    p-4
                    border
                    border-white/5
                  ">

                    <div className="
                      flex
                      items-center
                      gap-2
                      text-red-400
                      mb-2
                    ">

                      <MapPin size={18} />

                      <span className="text-sm">
                        Location
                      </span>

                    </div>

                    <h3 className="
                      text-white
                      font-semibold
                    ">
                      {task.location}
                    </h3>

                  </div>

                  <div className="
                    bg-white/5
                    rounded-2xl
                    p-4
                    border
                    border-white/5
                  ">

                    <div className="
                      flex
                      items-center
                      gap-2
                      text-cyan-400
                      mb-2
                    ">

                      <Layers size={18} />

                      <span className="text-sm">
                        Category
                      </span>

                    </div>

                    <h3 className="
                      text-white
                      font-semibold
                    ">
                      {task.category}
                    </h3>

                  </div>

                </div>

              </div>

       {/* Category */}


                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => {
                      setSelectedTask(task);
                      setShowEditModal(true);
                    }}
                    className="
                      px-4 py-2
                      rounded-xl
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      font-medium
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(task.id)}
                    className="
                      px-4 py-2
                      rounded-xl
                      bg-red-600
                      hover:bg-red-700
                      text-white
                      font-medium
                    "
                  >
                    Delete
                  </button>

              </div>

            </motion.div>


    
           


          ))
        }

      </div>

      {showEditModal && (

  <EditTaskModal
    task={selectedTask}
    onClose={() => {
      setShowEditModal(false);
      setSelectedTask(null);
    }}
    onTaskUpdated={(updatedTask) => {
  setTasks(prev =>
    prev.map(t =>
      t.id === updatedTask.id
        ? updatedTask
        : t
    )
  );
}}
  />

)}

    </div>

  );

}

export default PostedTasks;