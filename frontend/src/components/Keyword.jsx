import React from 'react'
import styles from '../styles/keyword.module.css'


const Keyword = ({skill}) => {
  return (
      <>
        <div className={styles.parent}>
              <span>{skill}</span>  
          <div className={styles.cross}>╳</div>
        </div>
      </>
    
  )
}

const SkillBox = ({skill}) => {
   return (
        <div className={styles.skillbox}>{skill}</div>
   )
}

export { Keyword, SkillBox };
