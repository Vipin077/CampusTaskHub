// pages/Login.jsx
import Home from "./Home";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

 function Login() {



  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Login Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8082/api/auth/login",
        formData
      );

      // JWT Token
      const token = response.data;

      // Save Token
      localStorage.setItem("token", token);
     console.log("JWT Saved:", token);


      setMessage("success");

      setTimeout(() => {
       navigate("/home");
      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage("error");

      setTimeout(() => {
        setMessage("");
      }, 2500);

    }

  };



  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#14001f] via-[#1b1035] to-[#0f172a] flex justify-center items-center font-sans">

      {/* Background Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/40 blur-[220px] rounded-full top-[-120px] left-[-100px]" />

      <div className="absolute w-[450px] h-[450px] bg-pink-500/30 blur-[220px] rounded-full bottom-[-120px] right-[-80px]" />

      <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-[170px] rounded-full top-[20%] right-[10%]" />

      <div className="absolute w-[280px] h-[280px] bg-orange-500/20 blur-[170px] rounded-full bottom-[10%] left-[15%]" />

      {/* Floating Shapes */}
      <motion.div

        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 6
        }}

        className="
          absolute
          left-[8%]
          top-[22%]
          w-28
          h-28
          rounded-3xl
          border
          border-pink-400/30
          bg-white/5
          backdrop-blur-md
          shadow-2xl
        "
      />

      <motion.div

        animate={{
          y: [0, 25, 0],
          rotate: [0, -12, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 7
        }}

        className="
          absolute
          right-[10%]
          bottom-[18%]
          w-36
          h-36
          rounded-full
          border
          border-cyan-400/30
          bg-white/5
          backdrop-blur-md
        "
      />

      <motion.div

        animate={{
          scale: [1, 1.1, 1]
        }}

        transition={{
          repeat: Infinity,
          duration: 4
        }}

        className="
          absolute
          right-[15%]
          top-[20%]
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-pink-500/30
          to-cyan-400/30
          rotate-45
        "
      />

      {/* LOGIN CARD */}
      <motion.form

        initial={{
          opacity: 0,
          y: 80
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        onSubmit={handleSubmit}

        className="
          relative
          z-10
          flex
          flex-col
          w-[400px]
          p-10
          gap-6
          rounded-[32px]
          bg-white/10
          backdrop-blur-xl
          border
          border-white/15
          shadow-[0_20px_80px_rgba(255,0,140,0.18)]
          overflow-hidden
        "
      >

        {/* Card Glow */}
        <div className="absolute w-[220px] h-[220px] bg-purple-500/40 blur-[120px] top-[-80px] right-[-80px]" />

        {/* Heading */}
        <motion.h1

          whileHover={{
            scale: 1.03
          }}

          className="
            text-5xl
            font-bold
            text-center
            bg-gradient-to-r
            from-white
            via-pink-300
            to-cyan-300
            bg-clip-text
            text-transparent
            relative
            z-10
          "
        >
          Welcome Back ⚡
        </motion.h1>

        <p className="
          text-center
          text-slate-300
          leading-7
          text-sm
          relative
          z-10
        ">
          Login and enter your futuristic
          campus marketplace universe.
        </p>

        {/* Email */}
        <motion.input

          whileFocus={{
            scale: 1.03
          }}

          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}

          className="
            relative
            z-10
            p-4
            text-white
            bg-white/10
            border
            border-white/20
            rounded-2xl
            outline-none
            placeholder-gray-300
            focus:ring-2
            focus:ring-pink-400
            transition
            backdrop-blur-md
          "
        />

        {/* Password */}
        <motion.input

          whileFocus={{
            scale: 1.03
          }}

          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}

          className="
            relative
            z-10
            p-4
            text-white
            bg-white/10
            border
            border-white/20
            rounded-2xl
            outline-none
            placeholder-gray-300
            focus:ring-2
            focus:ring-cyan-400
            transition
            backdrop-blur-md
          "
        />

        {/* Button */}
        <motion.button

          whileHover={{
            scale: 1.08,
            y: -4,
            boxShadow:
              "0 15px 40px rgba(255,0,140,0.6)"
          }}

          whileTap={{
            scale: 0.95
          }}

          type="submit"

          className="
            relative
            z-10
            p-4
            rounded-2xl
            text-white
            text-lg
            font-bold
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-blue-500
            shadow-lg
            transition-all
            duration-300
          "
        >
          Login 🚀
        </motion.button>

        {/* Signup Link */}
        <motion.p

          whileHover={{
            scale: 1.03
          }}

          className="
            text-center
            text-slate-300
            text-sm
            relative
            z-10
          "
        >
          New here?

          <span
            onClick={() => navigate("/signup")}
            className="
              text-pink-300
              font-bold
              cursor-pointer
            "
          >
            {" "}Create Account
          </span>

        </motion.p>

      </motion.form>

      {/* POPUP */}
      <AnimatePresence>

        {
          message && (

            <motion.div

              initial={{
                opacity: 0,
                y: -60,
                scale: 0.7
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}

              exit={{
                opacity: 0,
                y: -60,
                scale: 0.7
              }}

              transition={{
                duration: 0.4
              }}

              className={`
                absolute
                top-8
                right-8
                px-7
                py-4
                rounded-2xl
                text-white
                font-bold
                shadow-2xl
                backdrop-blur-xl
                z-50
                ${message === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                  : "bg-gradient-to-r from-pink-500 to-red-600"
                }
              `}
            >

              {
                message === "success"
                  ? "✅ Login Successful"
                  : "⚠️ Invalid Credentials"
              }

            </motion.div>
          )
        }

      </AnimatePresence>

    </div>

  );
}

export default Login;