import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../assets/styles/landing.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const reviews = [
  { name: "Lou Logico - Humorist", img: "/assets/img/user1.png" },
  { name: "Jean Pierre - Front-End Dev", img: "/assets/img/user2.png" },
  { name: "Jagger Meister - Boxer", img: "/assets/img/user3.png" },
  { name: "Jonas Jimbo - Singer", img: "/assets/img/user4.png" },
  { name: "Javy Kardashian - Nurse", img: "/assets/img/user5.png" },
  { name: "Juan Albertillo - Trucker", img: "/assets/img/user6.png" },
];

const subscriptions = [
  {
    plan: "Beginner",
    price: "9,99€",
    features: [
      "Two requests at time",
      "One/day delivery",
      "Unlimited AI assets",
      "Private Trello board",
    ],
    button: "Pay for Beginner",
  },
  {
    plan: "Pro",
    price: "19,99€",
    features: [
      "Two requests at time",
      "One/day delivery",
      "Unlimited AI assets",
      "Private Trello board",
    ],
    button: "Pay for Pro",
  },
  {
    plan: "Year",
    price: "7,99€",
    features: [
      "Two requests at time",
      "One/day delivery",
      "Unlimited AI assets",
      "Private Trello board",
    ],
    button: "Pay for Plus",
  },
];

const Landing = () => {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className="landing-container">
      <Navbar />

      {/* HERO SECTION */}
      <section className="section hero" id="hero">
        <motion.h1 variants={fadeInUp} initial="hidden" whileInView="visible">
          Achieve your goals and <br /> <span>LEVEL UP</span>
        </motion.h1>
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible">
          Level Up is your companion on the journey to a healthier, more balanced life.
          Through personalized missions and challenges, you'll improve your physical and mental well-being.
        </motion.p>
        <motion.button className="cta-button" variants={fadeInUp} initial="hidden" whileInView="visible">
          Start your journey
        </motion.button>

        <div className="brands">
          {["verizon", "facebook", "amazon", "headspace", "twilio"].map((brand, index) => (
            <img key={index} src={`/assets/img/${brand}.png`} alt={brand} />
          ))}
        </div>
      </section>

      {/* UNLOCK SECTION */}
      <section className="section unlock" id="unlock">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible">
          Unlock True Balance
        </motion.h2>
        <div className="unlock-cards">
          {[
            {
              icon: "fa-bullseye",
              title: "Boost your wellness",
              desc: "With each mission you complete, you’ll see tangible progress in your well-being.",
            },
            {
              icon: "fa-chart-line",
              title: "Constant motivation",
              desc: "Missions and achievements will keep you moving forward, growing along the way.",
            },
            {
              icon: "fa-cogs",
              title: "Move at your own pace",
              desc: "Advance on your own path to wellness with a system that adapts to your needs.",
            },
          ].map((card, i) => (
            <motion.div className="card" key={i} variants={fadeInUp} initial="hidden" whileInView="visible">
              <div className="icon">
                <i className={`fas ${card.icon}`} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how" id="how">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible">
          How it works
        </motion.h2>
        <div className="tabs">
          <button className="active">MISSIONS</button>
          <button>PROGRESS</button>
          <button>RESOURCES</button>
          <button>ACHIEVEMENTS</button>
        </div>
        <motion.div className="mascot-box" variants={fadeInUp} initial="hidden" whileInView="visible">
          <img src="/assets/img/mascot.png" alt="Mascot" />
          <p>
            Every week, you’ll get missions tailored to your interests, level, and goals. They're built to
            challenge you while staying achievable and adaptive.
          </p>
        </motion.div>
      </section>

      {/* SUBSCRIPTIONS SECTION */}
      <section className="section subscriptions" id="subscriptions">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible">
          Subscriptions
        </motion.h2>
        <div className="unlock-cards">
          {subscriptions.map((plan, i) => (
            <motion.div className="card" key={i} variants={fadeInUp} initial="hidden" whileInView="visible">
              <h3>{plan.plan}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <button>{plan.button}</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="section reviews" id="clients">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible">
          Our clients reviews
        </motion.h2>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {doubledReviews.map((r, i) => (
              <div className="testimonial-card" key={i}>
                <img src={r.img} alt={r.name} />
                <p>{r.name}</p>
                <div className="stars">★★★★★</div>
                <p className="review-text">Amazing experience!</p>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper reverse">
          <div className="carousel-track">
            {doubledReviews.map((r, i) => (
              <div className="testimonial-card" key={`rev-${i}`}>
                <img src={r.img} alt={r.name} />
                <p>{r.name}</p>
                <div className="stars">★★★★☆</div>
                <p className="review-text">Highly recommend!</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta" id="cta">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible">
          If you want to become one of them and
        </motion.h2>
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible">
          <span>Level Up your life</span>
        </motion.h2>
        <motion.button className="cta-button" variants={fadeInUp} initial="hidden" whileInView="visible">
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
