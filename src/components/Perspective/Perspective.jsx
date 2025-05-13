import React from 'react'
import styles from './Perspective.module.css'
function Perspective() {
  return (
    <div className={styles.perspective}>
        <div className={styles.perspectiveBackground} />
        <div className={styles.perspectiveForeground} />
      </div>
  )
}

export default Perspective