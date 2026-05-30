import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Signup() {


  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8082/api/auth/signup",
        formData
      );

      console.log("Success:", response.data);

      setMessage("success");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {

      console.log("Error:", error);

      setMessage("error");

      setTimeout(() => {
        setMessage("");
      }, 2500);

    }

  };

  return (

    <div style={styles.container}>

      {/* Neon Background */}
      <div style={styles.blurPurple}></div>
      <div style={styles.blurPink}></div>
      <div style={styles.blurBlue}></div>
      <div style={styles.blurOrange}></div>

      {/* Signup Card */}
      <motion.form

        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{
          duration: 1
        }}

        style={styles.form}

        onSubmit={handleSubmit}
      >

        {/* Glow */}
        <div style={styles.cardGlow}></div>

        {/* Heading */}
        <motion.h1

          whileHover={{
            scale: 1.03
          }}

          style={styles.heading}
        >
          Create Account ⚡
        </motion.h1>

        <p style={styles.subHeading}>
          Join the futuristic campus economy
          and start earning with your skills.
        </p>

        {/* Name */}
        <motion.input

          whileFocus={{
            scale: 1.03
          }}

          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

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
          style={styles.input}
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
          style={styles.input}
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

          style={styles.button}
        >
          Create Account 🚀
        </motion.button>

        {/* Login Link */}
        <motion.p

          whileHover={{
            scale: 1.03
          }}

          style={styles.loginText}
        >
          Already have an account?

          <span
            style={styles.loginLink}
            onClick={() => navigate("/login")}
          >
            {" "}Login
          </span>

        </motion.p>

      </motion.form>

      {/* POPUP MESSAGE */}
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

              style={{
                ...styles.popup,

                background:
                  message === "success"
                    ? "linear-gradient(135deg,#22c55e,#16a34a)"
                    : "linear-gradient(135deg,#ff4d6d,#c9184a)"
              }}
            >

              {
                message === "success"
                  ? "✅ Signup Successful"
                  : "⚠️ Invalid Email or Password"
              }

            </motion.div>
          )
        }

      </AnimatePresence>

    </div>

  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    background:
      "linear-gradient(135deg,#14001f,#1b1035,#0f172a,#1e1b4b)",
    fontFamily: "Arial, sans-serif"
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
    bottom: "-120px",
    right: "-80px",
    opacity: 0.35
  },

  blurBlue: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#3b82f6",
    filter: "blur(180px)",
    top: "20%",
    right: "15%",
    opacity: 0.25
  },

  blurOrange: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#ff7b00",
    filter: "blur(170px)",
    bottom: "10%",
    left: "25%",
    opacity: 0.22
  },

  form: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    padding: "45px",
    borderRadius: "32px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow:
      "0 20px 80px rgba(255,0,140,0.18)",
    position: "relative",
    overflow: "hidden",
    zIndex: 10
  },

  cardGlow: {
    position: "absolute",
    width: "220px",
    height: "220px",
    background: "#8b5cf6",
    filter: "blur(120px)",
    top: "-80px",
    right: "-80px",
    opacity: 0.45
  },

  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "5px",
    position: "relative",
    zIndex: 2,
    background:
      "linear-gradient(135deg,#ffffff,#f9a8d4,#60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  subHeading: {
    color: "#e2e8f0",
    textAlign: "center",
    lineHeight: "1.7",
    marginBottom: "10px",
    fontSize: "15px",
    position: "relative",
    zIndex: 2
  },

  input: {
    padding: "16px",
    fontSize: "16px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.18)",
    outline: "none",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    transition: "0.3s",
    backdropFilter: "blur(12px)",
    position: "relative",
    zIndex: 2
  },

  button: {
    padding: "16px",
    border: "none",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    background:
      "linear-gradient(135deg,#ff4ecd,#8b5cf6,#3b82f6)",
    transition: "0.4s",
    boxShadow:
      "0 10px 35px rgba(168,85,247,0.45)",
    position: "relative",
    zIndex: 2
  },

  loginText: {
    textAlign: "center",
    color: "#cbd5e1",
    fontSize: "15px",
    position: "relative",
    zIndex: 2,
    cursor: "default"
  },

  loginLink: {
    color: "#f9a8d4",
    fontWeight: "bold",
    cursor: "pointer"
  },

  popup: {
    position: "absolute",
    top: "35px",
    right: "35px",
    padding: "16px 28px",
    borderRadius: "18px",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    zIndex: 100,
    boxShadow: "0 15px 45px rgba(0,0,0,0.35)",
    backdropFilter: "blur(12px)",
    letterSpacing: "0.5px"
  }

};

export default Signup;