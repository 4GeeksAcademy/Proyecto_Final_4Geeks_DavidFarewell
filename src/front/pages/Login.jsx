import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../assets/styles/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await resp.json();

      if (resp.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id);
        alert("Login exitoso");
        navigate("/landing");
      } else {
        alert(data.msg || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className={styles.loginPage}>
      <motion.div
        className={styles.loginContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${styles.loginBox} ${styles.loginLeft}`}>
          <h1>
            <span className={styles.levelText}>LEVEL</span>
            <span className={styles.upText}>UP</span>
          </h1>
          <h2>Log in</h2>
          <p>Please enter your details or click here to register</p>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.rememberMe}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className={styles.loginBtn} onClick={handleLogin}>Log in</button>

          <button className={styles.githubBtn}>
            <i className="fab fa-github"></i> Log in with Github
          </button>

          <p className={styles.signupLink}>
            Don't have an account? <span onClick={() => navigate("/register")}>Sign up</span>
          </p>
        </div>

        <div className={`${styles.loginBox} ${styles.loginRight}`}>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <i className="fas fa-check-circle"></i> <span>Accept missions</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-chart-line"></i> <span>Level up your life</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-tasks"></i> <span>Track your progress</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-trophy"></i> <span>Unlock achievements</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
