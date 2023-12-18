import React from 'react'
import styles from '../styles/jobcards.module.css'
import flag from '../assets/flag.png'
import person from '../assets/personLogo.png'
import companyLogo from '../assets/compayLogo.png'
import ruppee from '../assets/ruppee.png'
import {SkillBox} from './Keyword'

const Jobcards = () => {
  return (
    <div className={styles.jobcards}>
      <div className={styles.jobcard_left_part}>
            <img className={styles.companyLogo} src={companyLogo} alt="" />
            <div className={styles.info}>
                <div className={styles.job}>
                    <span className={styles.job_title}>Frontend Developer</span>
                    <div className={styles.wrapper}>
                        <div className={styles.employee}>
                            <img className={styles.person_logo} src={person} alt="" /><span>11-50</span>
                        </div>
                        <div className={styles.salary}>
                            <img className={styles.ruppee_logo} src={ruppee} alt="" /><span>25,000</span>
                        </div>
                        <div className={styles.location}>
                            <img className={styles.flag} src={flag} alt="" /><span>Banglore</span>
                        </div>
                    </div>
                </div>
                <div className={styles.jobtype}>
                    <span>Office</span>
                    <span>Full time</span>
                </div>
            </div>
      </div>
      <div className={styles.jobcard_right_part}>
            <div className={styles.skillboxes}>
                <SkillBox skill={"Frontend"}></SkillBox>
                <SkillBox skill={"Frontend"}></SkillBox>
                <SkillBox skill={"Frontend"}></SkillBox>
                <SkillBox skill={"Frontend"}></SkillBox>
                <SkillBox skill={"Frontend"}></SkillBox>
                <SkillBox skill={"Frontend"}></SkillBox>
            </div>
            <div className={styles.buttons}>
                <button className={styles.editjob} >Edit job</button>
                <button className={styles.viewdetails} >View details</button>
            </div>
      </div>
    </div>
  )
}

export default Jobcards
