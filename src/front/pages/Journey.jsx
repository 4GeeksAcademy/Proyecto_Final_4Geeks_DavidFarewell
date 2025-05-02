import styles from "../assets/styles/Journey.module.css";
import AnimatedPage from "../components/AnimatedPage";
import Navbar from "../components/Navbar";

const Journey = () => {
    return (
        <AnimatedPage>
            <div className={styles.journeyContainer}>
                <div className={styles.journeyNavbarGrid}>
                    <Navbar />
                </div>
                <div className={styles.journeyContent}>
                    <div className={styles.journeyButton}>
                        <div className={`${styles.journeyCards} ${styles.journeyCard1}`}>
                        </div>
                        <div className={`${styles.jouneyCard} ${styles.journeyCard2}`}></div>
                        <div className={`${styles.journeyCard} ${styles.journeyCard3}`}></div>
                        <div className={`${styles.jouneyCard} ${styles.journeyCard3}`}></div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Journey;