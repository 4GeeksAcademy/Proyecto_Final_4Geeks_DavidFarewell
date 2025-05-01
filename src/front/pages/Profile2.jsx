import styles from "../assets/styles/Profile.module.css";

const Profile2 = () => {
    return(
    <div className={styles.page}>
        <div className={styles['content-left']}>
            <div className={styles.data}>
                <div className={styles['data-padding']}>
                    <div className={styles['data-edit-photo']}>
                        <img src="src/front/assets/styles/images/ProfilePhoto.jpg" alt="profile-photo" />
                        <div className={styles['pencil-icon-round']}>
                            <i className={`${styles['fa-solid']} ${styles['fa-pencil']} ${styles['pencil-icon']}`}></i>
                        </div>
                    </div>
                    <p>David Castillo</p>
                    <p>29 years old</p>
                    <p>Architect</p>
                    <p>Barcelona</p>
                </div>
            </div>
            <div className={styles.tasks}>
                <div className={styles['tasks-padding']}>
                    <h2>Extra Tasks</h2>
                    <div className={styles['task-mark']}>
                        <p>Watch a video</p>
                        <i className={`${styles['fa-solid']} ${styles['fa-play']} ${styles['play-task']}`}></i>
                    </div>
                    <div className={styles['task-mark']}>
                        <p>Walk for 20 minutes</p>
                        <div className={styles['circle-task']}></div>
                    </div>
                    <div className={styles['task-mark']}>
                        <p>Write your journal</p>
                        <div className={styles['circle-task']}></div>
                    </div>
                    <div className={styles['task-mark']}>
                        <p>Do a yoga class</p>
                        <i className={`${styles['fa-solid']} ${styles['fa-play']} ${styles['play-task']}`}></i>
                    </div>
                    <div className={styles['task-mark']}>
                        <p>Read for 20 minutes</p>
                        <div className={styles['circle-task']}></div>
                    </div>
                    <div className={styles['task-mark']}>
                        <p>Exercise for 30 minutes</p>
                        <div className={styles['circle-task']}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['content-middle']}>
            <div className={styles.navbar}>
            </div>
            <div className={styles.welcome}>
                <div className={styles['welcome-text']}>
                    <h1>Hello David!</h1>
                    <h2>Your inner journey continues today.</h2>
                    <h3>Your path to a stronger, wiser, and more focused <br></br> version of yourself begins with a single step.</h3>
                    <div className={styles['see-journey']}>
                        See your journey
                    </div>
                </div>
                <div className={styles['welcome-moty']}>
                    <img src="src/front/assets/styles/images/Confeti.webp" alt="moty" />
                </div>
            </div>
            <div className={styles['bottom-cards-wrapper']}>
                    <div className={styles['center-bottom-card']}>
                        <div className={styles['stats-title']}>
                            <h2>Global Stats</h2>
                        </div>
                        <div className={styles['global-stats1']}>
                            <div>
                                <h3>Tasks completed</h3>
                                <p>54</p>
                            </div>
                            <div>
                                <h3>Time in the app</h3>
                                <p>23 days</p>
                            </div>
                        </div>
                        <div className={styles['global-stats2']}>
                            <div>
                                <h3>Daily Missions</h3>
                                <p>20</p>
                            </div>
                            <div>
                                <h3>Time in the app</h3>
                                <p>23 days</p>
                            </div>                 
                        </div>
                    </div>
                    <div className={styles['center-bottom-card']}>
                        <div className={styles['achievements-title']}>
                            <h2>Achievements</h2>
                            <div className={styles['achievements-button']}>
                                See all
                            </div>
                        </div>
                            <div className={styles['achievements-motys']}>
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                            </div>
                            <div className={styles['achievements-motys']}>
                            <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                            </div>
                            <div className={styles['achievements-motys']}>
                            <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                                <img src="src/front/assets/styles/images/Alegre1.webp" alt="moty_alegre" />
                            </div>
                    </div>
            </div>
        </div>
        <div className={styles['content-right']}>
            <div className={styles['progress-card']}>
                <img src="src/front/assets/styles/images/ProgressBar.png" alt="progress-bar" />
            </div>
            <div className={styles.calendar}>
            </div>
            <div className={styles['cards-right']}>
                <div className={styles['week-progress']}>
                    <h2>Week's Progress</h2>
                    <div className={styles['week-progress-content']}>
                        <div className={styles['progress-visual']}>
                            <h3>Missions</h3>
                            <div class={styles['missions-progress-bar-container']}>
                                <div class={styles['missions-progress-bar']}></div>
                            </div>
                        </div>
                        <div className={styles['progress-visual']}>
                            <h3>XP Gained</h3>
                            <p>+560</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles['cards-right']} ${styles.reflection}`}>
                <div className={styles['today-reflection']}>
                    <h2>Today's Reflection</h2>
                    <p>Pause. Feel. Choose your path for today.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Profile2;