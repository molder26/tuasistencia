import React from "react";
import NavBar from "../NavBar/NavBar";

import styles from "./LandingPage.module.css";

function LandingPage() {
    return (
        <>
            <NavBar />
            
                <div className={styles.textCenter}>
                    <h3 className={styles.animateCharcter}> TU ASISTENCIA</h3>
                </div>
        
        </>
    );
}

export default LandingPage;
