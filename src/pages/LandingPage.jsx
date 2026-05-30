import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function LandingPage() {

   const thoughts = [
    "Aman needed urgent notes before exams. Priya uploaded them instantly and earned ₹300. Fast. Smart. Beautiful.",

    "Rohit’s bike broke down at midnight. Karan fixed it within an hour and made ₹500 before breakfast.",

    "Neha wanted a last-minute presentation design. Aarav delivered it overnight and earned ₹700 while sipping cold coffee.",

    "Simran was struggling with coding assignments. Dev solved the bugs, saved her grades, and pocketed ₹1200.",

    "A college fest needed photographers urgently. Tanya grabbed the gig and turned one evening into ₹2500.",

    "Arjun needed gym notes before viva. Mehak shared perfectly organized PDFs and earned money while chilling in her hostel.",

    "Late-night hunger hit the hostel hard. Kabir delivered snacks across campus and made more than a food app rider.",

    "One student needed help. Another had the skill. Campus Marketplace connected them in seconds. Simple. Powerful."
  ];

  
  const navigate = useNavigate();

  const [rotation, setRotation] = useState(0);

  const handleFlip = () => {
    setRotation((prev) => prev + 180);
  };

  return (

    <div style={styles.container}>

      {/* Bright Neon Background */}
      <div style={styles.blurPurple}></div>
      <div style={styles.blurPink}></div>
      <div style={styles.blurOrange}></div>
      <div style={styles.blurCyan}></div>

      {/* Navbar */}
      <nav style={styles.navbar}>

        <motion.h2
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 25px rgba(255,255,255,0.9)"
          }}
          style={styles.logo}
        >
          CampusTask ⚡
        </motion.h2>

        <div style={styles.navButtons}>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -4,
              background:
                "linear-gradient(135deg,#1e293b,#334155)",
              boxShadow: "0 15px 40px rgba(255,255,255,0.12)"
            }}
            whileTap={{ scale: 0.95 }}
            style={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              y: -6,
              boxShadow:
                "0 20px 45px rgba(255,119,198,0.8)"
            }}
            whileTap={{ scale: 0.94 }}
            style={styles.signupBtn}
            onClick={() => navigate("/signup")}
          >
            Signup
          </motion.button>

        </div>

      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.left}
        >

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={styles.heading}
          >
            Build The Future <br />
            Of Campus Work 🌈
          </motion.h1>

          <p style={styles.subHeading}>
            A futuristic student marketplace where
            tasks become income, skills become power,
            and your campus transforms into a living
            digital economy.
          </p>

          <div style={styles.heroButtons}>

            <motion.button
              whileHover={{
                scale: 1.12,
                y: -6,
                rotateX: 10,
                boxShadow:
                  "0 25px 55px rgba(168,85,247,0.7)"
              }}
              whileTap={{ scale: 0.92 }}
              style={styles.getStarted}
              onClick={() => navigate("/signup")}
            >
              Start Earning 🚀
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -5,
                backgroundColor: "rgba(255,255,255,0.18)"
              }}
              whileTap={{ scale: 0.95 }}
              style={styles.explore}
              onClick={() => navigate("/login")}
            >
              Explore World ✨
            </motion.button>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={styles.right}
        >

          <div style={styles.flipContainer}>

            <motion.div

              animate={{
                rotateY: rotation
              }}

              transition={{
                duration: 1,
                ease: "easeInOut"
              }}

              whileHover={{
                scale: 1.03,
                rotateX: 5
              }}

              style={styles.flipCard}

              onClick={handleFlip}
            >

              {/* FRONT */}
              <div style={styles.frontCard}>

                <div style={styles.cardGlow}></div>

                <h2 style={styles.cardTitle}>
                  📚 Assignment Rescue
                </h2>

                <p style={styles.cardText}>
                  Aman needed urgent notes before exams.
                  Priya uploaded them instantly and earned ₹300.
                  Fast. Smart. Beautiful.
                </p>

                <div style={styles.progressBar}>

                  <motion.div
                    style={styles.progress}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  />

                </div>

                <p style={styles.success}>
                  Task Completed Successfully ✅
                </p>

                <div style={styles.flipHint}>
                  CLICK TO ROTATE ⚡
                </div>

              </div>

              {/* BACK */}
              <div style={styles.backCard}>

                <div style={styles.cardGlowPink}></div>

                <h2 style={styles.cardTitle}>
                  💸 Skill Marketplace
                </h2>


                <p style={styles.cardText}>
                  Sell coding, editing, tutoring,
                  UI/UX design, notes and debugging
                  services inside your campus network.
                </p>

                <div style={styles.statsBox}>

                  <h3 style={styles.statsHeading}>
                    🔥 Trending Tasks
                  </h3>

                  <ul style={styles.list}>
                    <li>React Project → ₹1200</li>
                    <li>UI Design → ₹850</li>
                    <li>Semester Notes → ₹300</li>
                    <li>Python Help → ₹500</li>
                  </ul>

                </div>

                <p style={styles.success}>
                  Campus Economy Growing 🚀
                </p>

                <div style={styles.flipHint}>
                  KEEP CLICKING 🔄
                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </div>

  );
}

const styles = {

  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#14001f,#1b1035,#0f172a,#1e1b4b)",
    overflow: "hidden",
    position: "relative",
    color: "white",
    fontFamily: "Arial"
  },

  blurPurple: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "#a855f7",
    filter: "blur(220px)",
    top: "-150px",
    left: "-100px",
    opacity: 0.45
  },

  blurPink: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "#ff4ecd",
    filter: "blur(220px)",
    bottom: "-100px",
    right: "-80px",
    opacity: 0.35
  },

  blurOrange: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#ff7b00",
    filter: "blur(180px)",
    top: "20%",
    right: "20%",
    opacity: 0.28
  },

  blurCyan: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#22d3ee",
    filter: "blur(170px)",
    bottom: "10%",
    left: "35%",
    opacity: 0.25
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 70px",
    position: "relative",
    zIndex: 10
  },

  logo: {
    fontSize: "36px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    background:
      "linear-gradient(135deg,#ffffff,#f9a8d4,#93c5fd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  navButtons: {
    display: "flex",
    gap: "18px"
  },

  loginBtn: {
    padding: "14px 30px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    backdropFilter: "blur(12px)",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.4s"
  },

  signupBtn: {
    padding: "14px 30px",
    borderRadius: "18px",
    border: "none",
    background:
      "linear-gradient(135deg,#ff4ecd,#8b5cf6,#3b82f6)",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.4s",
    boxShadow:
      "0 10px 35px rgba(236,72,153,0.5)"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "90px 70px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 10
  },

  left: {
    flex: 1,
    minWidth: "320px"
  },

  heading: {
    fontSize: "82px",
    lineHeight: "1.05",
    marginBottom: "25px",
    background:
      "linear-gradient(135deg,#ffffff,#f9a8d4,#60a5fa,#22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  subHeading: {
    fontSize: "24px",
    color: "#e2e8f0",
    maxWidth: "650px",
    lineHeight: "1.8"
  },

  heroButtons: {
    display: "flex",
    gap: "22px",
    marginTop: "45px"
  },

  getStarted: {
    padding: "18px 38px",
    border: "none",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg,#ff4ecd,#8b5cf6,#3b82f6)",
    color: "white",
    cursor: "pointer",
    fontSize: "19px",
    fontWeight: "bold",
    transition: "0.4s",
    boxShadow:
      "0 15px 45px rgba(168,85,247,0.5)"
  },

  explore: {
    padding: "18px 38px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    cursor: "pointer",
    fontSize: "19px",
    backdropFilter: "blur(12px)",
    transition: "0.4s"
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
  },

  flipContainer: {
    perspective: "1800px"
  },

  flipCard: {
    width: "440px",
    height: "540px",
    position: "relative",
    transformStyle: "preserve-3d",
    cursor: "pointer"
  },

  frontCard: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    padding: "35px",
    borderRadius: "32px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow:
      "0 20px 80px rgba(255,0,153,0.25)",
    overflow: "hidden"
  },

  backCard: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    padding: "35px",
    borderRadius: "32px",
    background:
      "linear-gradient(135deg,rgba(30,41,59,0.92),rgba(91,33,182,0.85))",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow:
      "0 20px 80px rgba(59,130,246,0.25)",
    overflow: "hidden"
  },

  cardGlow: {
    position: "absolute",
    width: "240px",
    height: "240px",
    background: "#8b5cf6",
    filter: "blur(120px)",
    top: "-80px",
    right: "-80px",
    opacity: 0.45
  },

  cardGlowPink: {
    position: "absolute",
    width: "240px",
    height: "240px",
    background: "#ff4ecd",
    filter: "blur(120px)",
    top: "-80px",
    right: "-80px",
    opacity: 0.45
  },

  cardTitle: {
    fontSize: "32px",
    marginBottom: "18px",
    position: "relative",
    zIndex: 2
  },

  cardText: {
    color: "#f1f5f9",
    lineHeight: "1.9",
    fontSize: "17px",
    position: "relative",
    zIndex: 2
  },

  progressBar: {
    width: "100%",
    height: "15px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "30px",
    marginTop: "28px",
    overflow: "hidden",
    position: "relative",
    zIndex: 2
  },

  progress: {
    height: "100%",
    background:
      "linear-gradient(135deg,#22d3ee,#ff4ecd,#8b5cf6)",
    borderRadius: "30px"
  },

  success: {
    marginTop: "22px",
    color: "#86efac",
    fontWeight: "bold",
    fontSize: "17px",
    position: "relative",
    zIndex: 2
  },

  flipHint: {
    marginTop: "35px",
    color: "#f9a8d4",
    fontWeight: "bold",
    letterSpacing: "2px",
    fontSize: "14px"
  },

  statsBox: {
    marginTop: "35px",
    padding: "22px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    position: "relative",
    zIndex: 2
  },

  statsHeading: {
    marginBottom: "15px",
    color: "#ffffff"
  },

  list: {
    lineHeight: "2.1",
    color: "#e2e8f0"
  }

};

export default LandingPage;