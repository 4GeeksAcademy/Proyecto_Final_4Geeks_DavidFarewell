import React from "react";
import styles from "../assets/styles/Task.module.css";
import { style } from "framer-motion/client";
import Navbar from "../components/Navbar"

const photo = <img src="" alt="" />

const Task = () => {
    return(
        <div className={styles.taskContainer}>
            <div className={styles.taskPhoto}>

            </div>
            <div className={styles.taskText}>
                
            </div>
        </div>
    )
}

export default Task;