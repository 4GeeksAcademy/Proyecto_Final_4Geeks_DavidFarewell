//import styles from "../assets/styles/Journey.module.css";
import AnimatedPage from "../components/AnimatedPage";
//import Navbar from "../components/Navbar";

const Journey = () => {
    return (
        <AnimatedPage>
            <div className={styles['journey_container']}>
                <div className={styles.navbar}>
                    <Navbar></Navbar>
                </div>
                <div className={styles.content}>
                    <div className={styles['menu_month']}>
                        <div className={styles['menu_text']}>
                            <h3>May</h3>
                            <p>Week 1</p>
                            <p>Week 2</p>
                            <p>Week 3</p>
                            <p>Week 4</p>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.button}>
                            <div className={`${styles.card} ${styles.card1}`}>
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                            </div>
                            <div className={`${styles.card} ${styles.card2}`}></div>
                            <div className={`${styles.card} ${styles.card3}`}></div>
                            <div className={`${styles.card} ${styles.card3}`}></div>
                            <div className={`${styles.card} ${styles.card3}`}></div>
                            <div className={`${styles.card} ${styles.card3}`}></div>
                            <div className={`${styles.card} ${styles.card3}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Journey;