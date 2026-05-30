import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {

  return (

    <div className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-[#14001f]
      via-[#1b1035]
      to-[#0f172a]
      flex
      font-sans
    ">

      {/* Background Glow Orbs */}
      <div className="
        absolute
        w-[500px]
        h-[500px]
        bg-purple-500/30
        blur-[220px]
        rounded-full
        top-[-120px]
        left-[-100px]
      " />

      <div className="
        absolute
        w-[450px]
        h-[450px]
        bg-pink-500/20
        blur-[220px]
        rounded-full
        bottom-[-120px]
        right-[-80px]
      " />

      <div className="
        absolute
        w-[300px]
        h-[300px]
        bg-cyan-400/20
        blur-[170px]
        rounded-full
        top-[20%]
        right-[10%]
      " />

      <div className="
        absolute
        w-[280px]
        h-[280px]
        bg-orange-500/10
        blur-[170px]
        rounded-full
        bottom-[10%]
        left-[15%]
      " />

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
          border-pink-400/20
          bg-white/5
          backdrop-blur-md
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
          border-cyan-400/20
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
          from-pink-500/20
          to-cyan-400/20
          rotate-45
        "
      />

      {/* Sidebar */}
      <div className="relative z-20">
        <Sidebar />
      </div>

      {/* Main Content */}
      <motion.div

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8
        }}

        className="
          flex-1
          p-6
          relative
          z-10
        "
      >

        <div className="
          min-h-[calc(100vh-48px)]
          rounded-[30px]
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(255,0,140,0.12)]
          p-6
          overflow-hidden
        ">

          <Outlet />

        </div>

      </motion.div>

    </div>

  );
}

export default Home;