import React from "react";
import styles from "../assets/styles/Profile.module.css";
import avatarImg from "../assets/styles/images/Moti_Feliz.webp";
import genieImg from "../assets/styles/images/Moti_Feliz.webp"; // Imagen de relleno

export const Profile2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layoutGrid}>
        {/* CARD 1: Profile Info */}
        <div className={`${styles.card} ${styles.card1}`}>
          <h4 className={styles.cardTitle}>
            <strong>Name:</strong> David Castillo
          </h4>
          <p><strong>Years:</strong> 29</p>
          <p><strong>Job:</strong> Architect</p>
          <p><strong>City:</strong> Barcelona</p>
          <button className={styles.editButton}>✏️</button>
        </div>

        {/* CARD 2: Today’s Tasks */}
        <div className={`${styles.card} ${styles.card2}`}>
          <h4 className={styles.cardTitle}>Today’s Tasks</h4>
          <ul className={styles.taskList}>
            <li className={styles.taskItem}>
              Watch a video <span className={`${styles.statusDot} ${styles.done}`} />
            </li>
            <li className={styles.taskItem}>
              Walk for 20 minutes <span className={`${styles.statusDot} ${styles.done}`} />
            </li>
            <li className={styles.taskItem}>
              Write your journal <span className={`${styles.statusDot} ${styles.inProgress}`} />
            </li>
            <li className={styles.taskItem}>
              Do a yoga class <span className={`${styles.statusDot} ${styles.pending}`} />
            </li>
            <li className={styles.taskItem}>
              Read for 20 minutes <span className={`${styles.statusDot} ${styles.pending}`} />
            </li>
            <li className={styles.taskItem}>
              Exercise for 30 minutes <span className={`${styles.statusDot} ${styles.pending}`} />
            </li>
          </ul>
          <button className={styles.button}>ALL CONTENT</button>
        </div>

        {/* CARD 3: Hero */}
        <div className={styles.heroCard}>
          <div className={styles.heroText}>
            <h2>Hello, <strong>David!</strong></h2>
            <p>Your inner journey continues today.</p>
            <p>Your path to a stronger, wiser, and more focused version of yourself begins with a single step.</p>
            <button className={styles.journeyButton}>See your journey</button>
          </div>
          <img src={genieImg} alt="Genie" className={styles.heroImage} />
        </div>

        {/* CARD 4: Avatar */}
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.avatarBlock}>
            <img src={avatarImg} alt="Avatar" className={styles.avatarImage} />
            <div>
              <strong>David Castillo</strong>
              <div className={styles.levelBar}>
                <div className={styles.levelFill}></div>
              </div>
              <p>Lvl 6</p>
            </div>
          </div>
        </div>

        {/* CARD 5: Calendar */}
        <div className={`${styles.card} ${styles.card5}`}>
          <div className={styles.calendarHeader}>
            <span>&lt;</span>
            <span>May 2025</span>
            <span>&gt;</span>
          </div>
          <div className={styles.calendarGrid}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} className={styles.calendarDay}>{d}</div>
            ))}
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`${styles.calendarDate} ${i === 6 ? styles.highlightedDate : ""}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* CARD 6: Global Stats */}
        <div className={`${styles.card} ${styles.card6}`}>
          <h4 className={styles.cardTitle}>Global Stats</h4>
          <div className={styles.statsGrid}>
            <div>
              <p className={styles.statLabel}>Tasks completed</p>
              <p className={styles.statValue}>54</p>
            </div>
            <div>
              <p className={styles.statLabel}>Time in the app</p>
              <p className={styles.statValue}>23 days</p>
            </div>
            <div>
              <p className={styles.statLabel}>Daily missions</p>
              <p className={styles.statValue}>20</p>
            </div>
            <div>
              <p className={styles.statLabel}>Lorem Ipsum</p>
              <p className={styles.statValue}>Lorem Ipsum</p>
            </div>
          </div>
        </div>

        {/* CARD 7: Achievements */}
        <div className={`${styles.card} ${styles.card7}`}>
          <div className={styles.cardHeaderWithBtn}>
            <h4 className={styles.cardTitle}>Achievements</h4>
            <button className={styles.seeAllBtn}>See all</button>
          </div>
          <div className={styles.achievementsGrid}>
            {Array.from({ length: 15 }).map((_, i) => (
              <img
                key={i}
                src={avatarImg}
                alt={`achievement ${i + 1}`}
                className={styles.achievementIcon}
              />
            ))}
          </div>
        </div>

        {/* CARD 8: Week’s progress */}
        <div className={`${styles.card} ${styles.card8}`}>
          <h4 className={styles.cardTitle}>Week’s progress</h4>
          <p>Missions</p>
          <div className={styles.levelBar}>
            <div className={styles.levelFill}></div>
          </div>
          <p>XP Gained: <strong>+560</strong></p>
        </div>

        {/* CARD 9: Today’s Reflection */}
        <div className={`${styles.card} ${styles.card9}`}>
          <h4 className={styles.cardTitle}>Today’s Reflection</h4>
          <p>Pause. Feel. Choose your path for today.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile2;