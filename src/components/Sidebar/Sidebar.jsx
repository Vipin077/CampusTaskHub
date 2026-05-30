import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  ClipboardList,
  MessageCircle,
  Wallet,
  Trophy,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  PlusSquare,
  BarChart3,
  FileText,
  Eye
} from "lucide-react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import { useState } from "react";

function Sidebar() {

  const navigate = useNavigate();

  const location = useLocation();



  // =========================
  // STATES
  // =========================

  const [open, setOpen] = useState(false);

  const [openMyTasks, setOpenMyTasks]
    = useState(false);




  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };




  // =========================
  // NAV ITEMS
  // =========================

  const navItems = [

    {
      name: "Explore Tasks",
      path: "/home/explore",
      icon: <LayoutDashboard size={20} />
    },

    {
      name: "Messages",
      path: "/home/messages",
      icon: <MessageCircle size={20} />
    },

    {
      name: "Earnings",
      path: "/home/earnings",
      icon: <Wallet size={20} />
    },

    {
      name: "Leaderboard",
      path: "/home/leaderboard",
      icon: <Trophy size={20} />
    },

    {
      name: "Profile",
      path: "/home/profile",
      icon: <User size={20} />
    },

    {
      name: "Settings",
      path: "/home/settings",
      icon: <Settings size={20} />
    }

  ];




  // =========================
  // MY TASKS SUBMENU
  // =========================

  const myTaskLinks = [

    {
      name: "Create Task",
      path: "/home/mytasks/create",
      icon: <PlusSquare size={18} />
    },

    {
      name: "Posted Tasks",
      path: "/home/mytasks/posted",
      icon: <FileText size={18} />
    },

    {
      name: "Analytics",
      path: "/home/mytasks/analytics",
      icon: <BarChart3 size={18} />
    },

    {
      name: "Responses",
      path: "/home/mytasks/responses",
      icon: <Eye size={18} />
    }

  ];




  // =========================
  // UI
  // =========================

  return (

    <>

      {/* HAMBURGER BUTTON */}

      <button

        onClick={() => setOpen(true)}

        className="
          fixed
          top-5
          left-5
          z-50

          p-3

          rounded-2xl

          bg-white/10
          backdrop-blur-xl

          border
          border-white/10

          text-white

          shadow-lg

          hover:scale-105

          transition-all
          duration-300
        "
      >

        <Menu size={24} />

      </button>





      {/* OVERLAY */}

      <AnimatePresence>

        {
          open && (

            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              exit={{ opacity: 0 }}

              onClick={() => setOpen(false)}

              className="
                fixed
                inset-0

                bg-black/50
                backdrop-blur-sm

                z-40
              "
            />

          )
        }

      </AnimatePresence>





      {/* SIDEBAR */}

      <motion.aside

        initial={{
          x: -300
        }}

        animate={{
          x: open ? 0 : -320
        }}

        transition={{
          duration: 0.35
        }}

        className="
          fixed
          top-0
          left-0

          z-50

          h-screen
          w-[290px]

          bg-[#0f172a]/95

          backdrop-blur-2xl

          border-r
          border-white/10

          shadow-[0_20px_80px_rgba(255,0,140,0.15)]

          p-6

          flex
          flex-col
          justify-between

          overflow-y-auto
        "
      >




        {/* GLOW EFFECT */}

        <div className="
          absolute
          top-[-100px]
          right-[-100px]

          w-[220px]
          h-[220px]

          bg-pink-500/30

          blur-[120px]

          rounded-full
        " />





        {/* TOP SECTION */}

        <div className="relative z-10">



          {/* TOP BAR */}

          <div className="
            flex
            items-center
            justify-between

            mb-10
          ">

            {/* LOGO */}

            <motion.h1

              whileHover={{
                scale: 1.05
              }}

              className="
                text-3xl
                font-extrabold

                bg-gradient-to-r
                from-pink-300
                via-white
                to-cyan-300

                bg-clip-text
                text-transparent
              "
            >

              Campus Hub ⚡

            </motion.h1>

          </div>

          {/* NAVIGATION */}

          <div className="flex flex-col gap-3">



            {/* MY TASKS */}

            <div>

              <button

                onClick={() =>
                  setOpenMyTasks(!openMyTasks)
                }

                className="
                  w-full

                  flex
                  items-center
                  justify-between

                  px-4
                  py-3

                  rounded-2xl

                  transition-all
                  duration-300

                  text-slate-300

                  hover:bg-white/10
                  hover:text-white
                "
              >

                <div className="
                  flex
                  items-center
                  gap-4
                ">

                  <ClipboardList size={20} />

                  <span className="font-medium">
                    My Tasks
                  </span>

                </div>

                {
                  openMyTasks

                    ? <ChevronUp size={18} />

                    : <ChevronDown size={18} />
                }

              </button>





              {/* SUBMENU */}

              <AnimatePresence>

                {
                  openMyTasks && (

                    <motion.div

                      initial={{
                        height: 0,
                        opacity: 0
                      }}

                      animate={{
                        height: "auto",
                        opacity: 1
                      }}

                      exit={{
                        height: 0,
                        opacity: 0
                      }}

                      transition={{
                        duration: 0.3
                      }}

                      className="
                        overflow-hidden

                        ml-5
                        mt-2

                        flex
                        flex-col
                        gap-2
                      "
                    >

                      {
                        myTaskLinks.map((item, index) => (

                          <Link

                            key={index}

                            to={item.path}

                            onClick={() =>
                              setOpen(false)
                            }

                            className={`
                              flex
                              items-center
                              gap-3

                              px-4
                              py-3

                              rounded-xl

                              transition-all
                              duration-300

                              ${
                                location.pathname === item.path

                                  ? `
                                    bg-gradient-to-r
                                    from-pink-500/30
                                    to-cyan-500/20

                                    text-white

                                    border
                                    border-white/10
                                  `

                                  : `
                                    text-slate-400

                                    hover:bg-white/10
                                    hover:text-white
                                  `
                              }
                            `}
                          >

                            {item.icon}

                            <span>
                              {item.name}
                            </span>

                          </Link>

                        ))
                      }

                    </motion.div>

                  )
                }

              </AnimatePresence>

            </div>





            {/* OTHER NAV ITEMS */}

            {
              navItems.map((item, index) => (

                <Link

                  key={index}

                  to={item.path}

                  onClick={() => setOpen(false)}

                  className={`
                    flex
                    items-center
                    gap-4

                    px-4
                    py-3

                    rounded-2xl

                    transition-all
                    duration-300

                    ${
                      location.pathname === item.path

                        ? `
                          bg-gradient-to-r
                          from-pink-500/30
                          to-cyan-500/20

                          border
                          border-white/20

                          text-white

                          shadow-lg
                        `

                        : `
                          text-slate-300

                          hover:bg-white/10
                          hover:text-white
                        `
                    }
                  `}
                >

                  {item.icon}

                  <span className="font-medium">
                    {item.name}
                  </span>

                </Link>

              ))
            }

          </div>

        </div>





        {/* LOGOUT BUTTON */}

        <motion.button

          whileHover={{
            scale: 1.04
          }}

          whileTap={{
            scale: 0.95
          }}

          onClick={handleLogout}

          className="
            relative
            z-10

            flex
            items-center
            justify-center
            gap-3

            w-full

            p-4

            rounded-2xl

            text-white
            font-bold

            bg-gradient-to-r
            from-pink-500
            via-red-500
            to-orange-500

            shadow-lg

            hover:shadow-pink-500/30

            transition-all
            duration-300
          "
        >

          <LogOut size={20} />

          Logout

        </motion.button>

      </motion.aside>

    </>

  );
}

export default Sidebar;