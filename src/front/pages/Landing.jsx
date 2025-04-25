import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../assets/styles/landing.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />

      {/* HERO SECTION */}
      <section className="section hero" id="hero">
        <div className="hero-overlay">
          <motion.h1
            className="hero-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Achieve your goals and <br /> <span>LEVEL UP</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Level Up is your companion on the journey to a healthier, more
            balanced life. Through personalized missions and challenges, you'll
            improve your physical and mental well-being.
          </motion.p>

          <motion.button
            className="cta-button"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Start your journey
          </motion.button>
        </div>

        <div className="sponsors-carousel">
          <div className="carousel-track">
            <img src="/assets/img/facebook.png" alt="facebook" />
            <img src="/assets/img/amazon.png" alt="amazon" />
            <img src="/assets/img/headspace.png" alt="headspace" />
            <img src="/assets/img/twilio.png" alt="twilio" />
            <img src="/assets/img/verizon.png" alt="verizon" />
            <img src="/assets/img/facebook.png" alt="facebook" />
            <img src="/assets/img/amazon.png" alt="amazon" />
            <img src="/assets/img/headspace.png" alt="headspace" />
            <img src="/assets/img/twilio.png" alt="twilio" />
            <img src="/assets/img/verizon.png" alt="verizon" />
          </div>
        </div>
      </section>

      {/* UNLOCK SECTION */}
      <section className="section unlock" id="unlock">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Unlock True Balance
        </motion.h2>
        <div className="unlock-boxes">
          {[
            "Boost your wellness",
            "Constant motivation",
            "Move at your own pace",
          ].map((title, i) => (
            <motion.div
              className="box"
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <i
                className={`fas ${
                  i === 0 ? "fa-bullseye" : i === 1 ? "fa-chart-line" : "fa-cogs"
                }`}
              ></i>
              <h3>{title}</h3>
              <p>
                {i === 0 &&
                  "With each mission you complete, you’ll see tangible progress in your well-being."}
                {i === 1 &&
                  "Missions and achievements will keep you moving forward, growing along the way."}
                {i === 2 &&
                  "Advance on your own path to wellness with a system that adapts to your needs."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-it-works" id="how">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          How it works
        </motion.h2>
        <div className="tabs">
          <button className="active">MISSIONS</button>
          <button>PROGRESS</button>
          <button>RESOURCES</button>
          <button>ACHIEVEMENTS</button>
        </div>
        <motion.div
          className="mission-box"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/assets/img/mascot.png" alt="Mascot" />
          <p>
            Every week, you’ll get missions tailored to your interests, level,
            and goals. Built to challenge you while staying achievable and
            adaptive.
          </p>
        </motion.div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="section clients" id="clients">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our clients reviews
        </motion.h2>
        <div className="reviews-carousel">
          <div className="line line-top">
            <div className="review">Lou Logico - Humorist</div>
            <div className="review">Jean Pierre - Front-End Dev</div>
            <div className="review">Jagger Meister - Boxer</div>
          </div>
          <div className="line line-bottom">
            <div className="review">Jonas Jimbo - Singer</div>
            <div className="review">Javy Kardashian - Nurse</div>
            <div className="review">Juan Albertillo - Trucker</div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta-final" id="end">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          If you want to become one of them and
        </motion.h2>
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Level Up your life
        </motion.h3>
        <motion.button
          className="cta-button"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          CLICK HERE
        </motion.button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Level Up © 2025</p>
      </footer>
    </div>
  );
};

export default Landing;
