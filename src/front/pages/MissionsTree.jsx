import React from "react";
import styles from "../assets/styles/MissionsTree.module.css";
import { style } from "framer-motion/client";
import Navbar from "../components/Navbar"

const MissionsTree = () => {
    return(
        <div className={styles.container}>
            <div className={styles.missionsCompleted}>
                
            </div>
            <div className={styles.tasksButtons}>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default MissionsTree;