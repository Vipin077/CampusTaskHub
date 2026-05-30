import { useState, useEffect } from "react";
import axios from "axios";

function EditTaskModal({
  task,
  onClose,
  onTaskUpdated,
}) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    reward: "",
    deadline: "",
    location: "",
    category: "",
  });

  useEffect(() => {

    if (task) {

      setFormData({
        title: task.title || "",
        description: task.description || "",
        reward: task.reward || "",
        deadline: task.deadline || "",
        location: task.location || "",
        category: task.category || "",
      });

    }

  }, [task]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      const response = await axios.put(
        `http://localhost:8082/api/tasks/update/${task.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onTaskUpdated(response.data);

      onClose();

    } catch (error) {

      console.error(error);

      alert("Failed to update task");

    }
  };

  if (!task) return null;

  return (

    <div className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="
        bg-zinc-900
        w-full
        max-w-2xl
        p-8
        rounded-3xl
        border
        border-zinc-800
      ">

        <h2 className="
          text-2xl
          font-bold
          text-white
          mb-6
        ">
          Edit Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-3 rounded-xl bg-zinc-800 text-white"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="number"
            name="reward"
            value={formData.reward}
            onChange={handleChange}
            placeholder="Reward"
            className="w-full p-3 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-3 rounded-xl bg-zinc-800 text-white"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full p-3 rounded-xl bg-zinc-800 text-white"
          />

          <div className="flex gap-3 pt-4">

            <button
              type="submit"
              className="
                px-5
                py-3
                rounded-xl
                bg-green-600
                text-white
              "
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                px-5
                py-3
                rounded-xl
                bg-red-600
                text-white
              "
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default EditTaskModal;