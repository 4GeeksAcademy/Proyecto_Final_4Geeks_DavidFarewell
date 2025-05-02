import styles from "../assets/styles/Journey.module.css";
import AnimatedPage from "../components/AnimatedPage";
import Navbar from "../components/Navbar";

const Journey = () => {
    return (
        <AnimatedPage>
            <div className={styles['journey_container']}>
                <div className={styles.navbarGrid}>
                    <Navbar />
                </div>
                <div className={styles.content}>
                    <div className={styles.button}>
                        <div className={`${styles.card} ${styles.card1}`}>
                        </div>
                        <div className={`${styles.card} ${styles.card2}`}></div>
                        <div className={`${styles.card} ${styles.card3}`}></div>
                        <div className={`${styles.card} ${styles.card3}`}></div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Journey;