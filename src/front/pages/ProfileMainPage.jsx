// src/front/pages/ProfileMainPage.jsx
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
    <div className={styles.profileMainContainer}>
      {/* LEFT COLUMN */}
      <div className={styles.profileSidebar}>
        <div className={styles.profileCard}>
          <p><strong>Name:</strong> David Castillo</p>
          <p><strong>Years:</strong> 29</p>
          <p><strong>Job:</strong> Architect</p>
          <p><strong>City:</strong> Barcelona</p>
          <button className={styles.profileEditIcon}>
            <i className="fas fa-pen"></i>
          </button>
        </div>

        <div className={`${styles.profileCard} ${styles.profileTaskCard}`}>
          <h3>Today’s Tasks</h3>
          <ul className={styles.profileTaskList}>
            {tasks.map((task, i) => (
              <li key={i}>
                <span>{task.name}</span>
                <span>
                  {task.status === "done" && "🟢"}
                  {task.status === "in-progress" && "🟠"}
                  {task.status === "pending" && "⚪"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button className={styles.profileAllContentButton}>ALL CONTENT</button>
      </div>

      {/* CENTER COLUMN */}
      <div>
        <div className={styles.profileWelcomeCard}>
          <div className={styles.profileWelcomeText}>
            <h1>Hello, <strong>David!</strong></h1>
            <p>Your inner journey continues today.</p>
            <p>
              Your path to a stronger, wiser, and more focused version of
              yourself begins with a single step.
            </p>
            <button className={styles.profileJourneyButton}>See your journey</button>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="Genie"
            className={styles.profileWelcomeImage}
          />
        </div>

        <div className={styles.profileCardSection}>
          <div className={styles.profileGlobalStats}>
            <h3>Global Stats</h3>
            <div className={styles.profileStatsGrid}>
              <div><strong>Tasks completed</strong><br />54</div>
              <div><strong>Time in the app</strong><br />23 days</div>
              <div><strong>Daily missions</strong><br />20</div>
              <div><strong>Lorem Ipsum</strong><br />Lorem Ipsum</div>
            </div>
          </div>

          <div className={styles.profileAchievements}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Achievements</h3>
              <button className={styles.profileSeeAllBtn}>See all</button>
            </div>
            <div className={styles.profileAchievementsGrid}>
              {achievements.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`achievement-${i}`}
                  className={styles.profileAchievementIcon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className={styles.profileSidebarRight}>
        <div className={styles.profileUserInfoCard}>
          <img
            src="https://via.placeholder.com/60"
            alt="Avatar"
          />
          <p><strong>David Castillo</strong></p>
          <div className={styles.profileLevelBar}>
            <div className={styles.profileLevelFill}></div>
          </div>
          <p>Lvl 6</p>
        </div>

        <div className={styles.profileCalendarCard}>
          <h3>&lt; May 2025 &gt;</h3>
          <div className="calendarPlaceholder">📅 Calendar will go here</div>
        </div>

        <div className={styles.profileProgressCard}>
          <h3>Week’s progress</h3>
          <p>Missions</p>
          <div className={styles.profileLevelBar}>
            <div className={styles.profileLevelFill}></div>
          </div>
          <p>XP Gained: <strong>+560</strong></p>
        </div>

        <div className={styles.profileReflectionCard}>
          <h3>Today’s Reflection</h3>
          <p>Pause. Feel. Choose your path for today.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainPage;
