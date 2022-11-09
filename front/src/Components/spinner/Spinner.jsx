import React from 'react';
import styles from "../../Components/spinner/spinner.module.css"; 

function Spinner() {
    const loading = "https://i.gifer.com/Ocko.gif"
  return (
    <div className={styles.containerSpinner}>
        <img src={loading} alt="Cargando" className={styles.spinner}/>
        
        </div>
  )
}

export default Spinner;