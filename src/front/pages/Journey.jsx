import { useState, useEffect } from "react";
import styles from "../assets/styles/Journey.module.css";
import AnimatedPage from "../components/AnimatedPage";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";

// Función para mezclar los números
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Journey = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentClickedNumber, setCurrentClickedNumber] = useState(1);

  useEffect(() => {
    const savedNumbers = localStorage.getItem("shuffledNumbers");

    if (savedNumbers) {
      setNumbers(JSON.parse(savedNumbers));
    } else {
      const shuffledNumbers = shuffleArray(Array.from({ length: 16 }, (_, i) => i + 1));
      setNumbers(shuffledNumbers);
      localStorage.setItem("shuffledNumbers", JSON.stringify(shuffledNumbers));
    }
  }, []);

  const handleClick = (num) => {
    if (num === currentClickedNumber) {
      setCurrentClickedNumber((prev) => prev + 1);
    }
  };

  return (
    <AnimatedPage>
      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Particles
          particleColors={['#6725D8', '#6725D8']}
          particleCount={300}
          particleSpread={5}
          speed={0.2}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <div className={styles.journeyContainer}>
            <div className={styles.journeyCalendarButtons}>
              {numbers.map((num) => {
                const isCurrent = num === currentClickedNumber;
                const isCompleted = num < currentClickedNumber;
                const isLocked = num > currentClickedNumber;

                const background = isCurrent
                  ? "radial-gradient(circle at 30% 30%, #FF8F84, #FB645C)"
                  : isCompleted
                  ? "radial-gradient(circle at 30% 30%, #98FFD0, #5CFB7E)"
                  : "radial-gradient(circle at 30% 30%, #7E768A, #4E465C)";

                return (
                  <div
                    key={num}
                    className={`${styles.journeyButton} ${isCurrent ? styles.flipEnabled : ""}`}
                    onClick={() => handleClick(num)}
                    style={{
                      background,
                      cursor: isCurrent ? "pointer" : "not-allowed",
                    }}
                  >
                    <div className={styles.cardFront}>
                      <h1>{num}</h1>
                    </div>
                    <div className={styles.cardBack}>
                      <img src="src/front/assets/styles/images/MISSION_PODCAST_ROSITA.webp" alt="MotyActive" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Journey;

