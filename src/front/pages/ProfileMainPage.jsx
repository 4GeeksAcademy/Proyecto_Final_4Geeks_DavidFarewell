import React from "react";
import styles from "../assets/styles/ProfileMainPage.module.css";

const ProfileMainPage = () => {
  const tasks = [
    { name: "Watch a video", status: "done" },
    { name: "Walk for 20 minutes", status: "done" },
    { name: "Write your journal", status: "in-progress" },
    { name: "Do a yoga class", status: "pending" },
    { name: "Read for 20 minutes", status: "pending" },
    { name: "Exercise for 30 minutes", status: "pending" },
  ];

  const achievements = new Array(12).fill("https://via.placeholder.com/40");

  return (
    <div className={styles.ProfileMain_container}>
      <div className={styles.ProfileMain_layoutGrid}>
        {/* Profile Info */}
        <div className={styles.ProfileMain_card}>
          <p><strong>Name:</strong> David Castillo</p>
          <p><strong>Years:</strong> 29</p>
          <p><strong>Job:</strong> Architect</p>
          <p><strong>City:</strong> Barcelona</p>
          <button className={styles.ProfileMain_editButton}><i className="fas fa-pen"></i></button>
        </div>

        {/* Tasks */}
        <div className={styles.ProfileMain_card}>
          <h3 className={styles.ProfileMain_cardTitle}>Today’s Tasks</h3>
          <ul className={styles.ProfileMain_taskList}>
            {tasks.map((task, i) => (
              <li key={i} className={styles.ProfileMain_taskItem}>
                <span>{task.name}</span>
                <span className={`${styles.ProfileMain_statusDot} ${task.status === "done" ? styles.ProfileMain_statusDone : task.status === "in-progress" ? styles.ProfileMain_statusInProgress : styles.ProfileMain_statusPending}`} />
              </li>
            ))}
          </ul>
          <button className={styles.ProfileMain_contentButton}>ALL CONTENT</button>
        </div>

        {/* Hero */}
        <div className={styles.ProfileMain_heroCard}>
          <div className={styles.ProfileMain_heroText}>
            <h2>Hello, <strong>David!</strong></h2>
            <p>Your inner journey continues today.</p>
            <p>Your path to a stronger, wiser, and more focused version of yourself begins with a single step.</p>
            <button className={styles.ProfileMain_journeyButton}>See your journey</button>
          </div>
          <img src="https://via.placeholder.com/120" alt="Genie" className={styles.ProfileMain_heroImage} />
        </div>

        {/* Avatar */}
        <div className={styles.ProfileMain_card}>
          <div>
            <img src="https://via.placeholder.com/60" alt="Avatar" className={styles.ProfileMain_avatarImage} />
            <p><strong>David Castillo</strong></p>
            <div className={styles.ProfileMain_levelBar}><div className={styles.ProfileMain_levelFill} /></div>
            <p>Lvl 6</p>
          </div>
        </div>

        {/* Calendar */}
        <div className={styles.ProfileMain_card}>
          <div className={styles.ProfileMain_calendarHeader}>
            <span>{"<"}</span>
            <strong>May 2025</strong>
            <span>{">"}</span>
          </div>
          <div className={styles.ProfileMain_calendarGrid}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={`d-${i}`} className={styles.ProfileMain_calendarDay}>{d}</span>
            ))}
            {Array.from({ length: 35 }, (_, i) => (
              <span
                key={`date-${i}`}
                className={`${styles.ProfileMain_calendarDate} ${i === 10 ? styles.ProfileMain_highlightedDate : ""}`}
              >
                {i > 3 ? i - 3 : ""}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={styles.ProfileMain_card}>
          <h3 className={styles.ProfileMain_cardTitle}>Global Stats</h3>
          <div className={styles.ProfileMain_statsGrid}>
            <div><p className={styles.ProfileMain_statLabel}>Tasks completed</p><p className={styles.ProfileMain_statValue}>54</p></div>
            <div><p className={styles.ProfileMain_statLabel}>Time in the app</p><p className={styles.ProfileMain_statValue}>23 days</p></div>
            <div><p className={styles.ProfileMain_statLabel}>Daily missions</p><p className={styles.ProfileMain_statValue}>20</p></div>
            <div><p className={styles.ProfileMain_statLabel}>Lorem Ipsum</p><p className={styles.ProfileMain_statValue}>Lorem Ipsum</p></div>
          </div>
        </div>

        {/* Achievements */}
        <div className={styles.ProfileMain_card}>
          <div className={styles.ProfileMain_cardHeaderWithBtn}>
            <h3>Achievements</h3>
            <button className={styles.ProfileMain_seeAllBtn}>See all</button>
          </div>
          <div className={styles.ProfileMain_achievementsGrid}>
            {achievements.map((src, i) => (
              <img key={i} src={src} alt={`achievement-${i}`} className={styles.ProfileMain_achievementIcon} />
            ))}
          </div>
        </div>

        {/* Week progress */}
        <div className={styles.ProfileMain_card}>
          <h3 className={styles.ProfileMain_cardTitle}>Week’s progress</h3>
          <p>Missions</p>
          <div className={styles.ProfileMain_levelBar}><div className={styles.ProfileMain_levelFill} /></div>
          <p>XP Gained: <strong>+560</strong></p>
        </div>

        {/* Reflection */}
        <div className={styles.ProfileMain_card}>
          <h3 className={styles.ProfileMain_cardTitle}>Today’s Reflection</h3>
          <p>Pause. Feel. Choose your path for today.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainPage;
