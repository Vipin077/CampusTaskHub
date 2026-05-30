import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import {
  Briefcase,
  FileText,
  IndianRupee,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Loader2,
} from "lucide-react";

function CreateTaskForm() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    reward: "",
    deadline: "",
    location: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

     const token = localStorage.getItem("token");

console.log("TOKEN =", token);

const response = await axios.post(
  "http://localhost:8082/api/tasks/create",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      console.log(response.data);

      alert("🚀 Task Created Successfully");

      setFormData({
        title: "",
        description: "",
        reward: "",
        deadline: "",
        location: "",
        category: "",
      });

    }
    catch (error) {

      console.error(error);

      alert("❌ Failed To Create Task");

    }
    finally {

      setLoading(false);

    }

  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.7,
      }}

      className="
        relative
        max-w-4xl
        mx-auto
      "
    >

      {/* Glow Effect */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-pink-500/20
        via-purple-500/20
        to-cyan-500/20
        blur-3xl
        rounded-[40px]
      " />

      {/* Main Card */}
      <div className="
        relative
        z-10
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-[32px]
        shadow-[0_20px_80px_rgba(168,85,247,0.18)]
        p-8
        overflow-hidden
      ">

        {/* Decorative Circle */}
        <div className="
          absolute
          w-72
          h-72
          rounded-full
          bg-pink-500/10
          blur-[140px]
          top-[-100px]
          right-[-80px]
        " />

        {/* Heading */}
        <div className="relative z-10 mb-10">

          <div className="flex items-center gap-3 mb-4">

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
                tracking-tight
              ">
                Create New Task
              </h1>

              <p className="text-gray-300 mt-1">
                Post challenges. Earn trust. Build your campus network.
              </p>

            </div>

          </div>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-7 relative z-10"
        >

          {/* Title */}
          <div>

            <label className="
              text-sm
              text-gray-300
              mb-2
              block
              font-medium
            ">
              Task Title
            </label>

            <div className="relative">

              <Briefcase
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-pink-400
                "
                size={20}
              />

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Need React Assignment Help"
                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder-gray-400
                  outline-none
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/30
                  transition-all
                "
                required
              />

            </div>

          </div>

          {/* Description */}
          <div>

            <label className="
              text-sm
              text-gray-300
              mb-2
              block
              font-medium
            ">
              Description
            </label>

            <div className="relative">

              <FileText
                className="
                  absolute
                  left-4
                  top-5
                  text-cyan-400
                "
                size={20}
              />

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Explain your task in detail..."
                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  text-white
                  placeholder-gray-400
                  outline-none
                  focus:border-cyan-500
                  focus:ring-2
                  focus:ring-cyan-500/30
                  transition-all
                  resize-none
                "
                required
              />

            </div>

          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Reward */}
            <div>

              <label className="
                text-sm
                text-gray-300
                mb-2
                block
                font-medium
              ">
                Reward Amount
              </label>

              <div className="relative">

                <IndianRupee
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-yellow-400
                  "
                  size={20}
                />

                <input
                  type="number"
                  name="reward"
                  value={formData.reward}
                  onChange={handleChange}
                  placeholder="500"
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-400
                    outline-none
                    focus:border-yellow-500
                    focus:ring-2
                    focus:ring-yellow-500/30
                    transition-all
                  "
                  required
                />

              </div>

            </div>

            {/* Deadline */}
            <div>

              <label className="
                text-sm
                text-gray-300
                mb-2
                block
                font-medium
              ">
                Deadline
              </label>

              <div className="relative">

                <Calendar
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-purple-400
                    z-10
                  "
                  size={20}
                />

                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-500/30
                    transition-all
                    color-scheme-dark
                  "
                  required
                />

              </div>

            </div>

            {/* Location */}
            <div>

              <label className="
                text-sm
                text-gray-300
                mb-2
                block
                font-medium
              ">
                Location
              </label>

              <div className="relative">

                <MapPin
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-red-400
                  "
                  size={20}
                />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="MANIT Campus"
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder-gray-400
                    outline-none
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-500/30
                    transition-all
                  "
                  required
                />

              </div>

            </div>

            {/* Category */}
            <div>

              <label className="
                text-sm
                text-gray-300
                mb-2
                block
                font-medium
              ">
                Category
              </label>

              <div className="relative">

                <Layers
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-cyan-400
                    z-10
                  "
                  size={20}
                />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    rounded-2xl
                    bg-[#1b1035]
                    border
                    border-white/10
                    text-white
                    outline-none
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-500/30
                    transition-all
                  "
                  required
                >

                  <option value="">Select Category</option>
                  <option value="Study">Study</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Coding">Coding</option>
                  <option value="Design">Design</option>
                  <option value="Event">Event</option>
                  <option value="Other">Other</option>

                </select>

              </div>

            </div>

          </div>

          {/* Submit Button */}
          <motion.button

            whileHover={{
              scale: 1.02,
            }}

            whileTap={{
              scale: 0.98,
            }}

            type="submit"

            disabled={loading}

            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-cyan-500
              text-white
              font-bold
              text-lg
              shadow-[0_10px_40px_rgba(168,85,247,0.4)]
              hover:shadow-[0_10px_60px_rgba(236,72,153,0.45)]
              transition-all
              flex
              items-center
              justify-center
              gap-3
            "
          >

            {
              loading
                ? <>
                    <Loader2 className="animate-spin" size={22} />
                    Creating Task...
                  </>
                : <>
                    <Sparkles size={22} />
                    Launch Task
                  </>
            }

          </motion.button>

        </form>

      </div>

    </motion.div>

  );

}

export default CreateTaskForm;