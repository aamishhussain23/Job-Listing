import React, { useContext } from 'react'
import styles from '../styles/jobcards.module.css'
import flag from '../assets/flag.png'
import person from '../assets/personLogo.png'
import companyLogo from '../assets/compayLogo.png'
import ruppee from '../assets/ruppee.png'
import {SkillBox} from './Keyword'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Context } from '..'
// import axios from 'axios'
// import { server } from '../App'

const Jobcards = ({id, position, name, salary, location, remote_office, type, skills}) => {
    const navigate = useNavigate()

    const {isAuthenticated, setJob_id, setFormEdit} = useContext(Context)
    const showFullDetails = () => {
        toast.success(id)
    }

    const handleEditBtn = (e) => {
        toast.success(id)
        navigate('/add-job')
        setJob_id(id)
        setFormEdit(true)
    }


  return (
    <div className={styles.jobcards}>
      <div className={styles.jobcard_left_part}>
            <img className={styles.companyLogo} src={companyLogo} alt="" />
            <div className={styles.info}>
                <div className={styles.job}>
                    <span className={styles.job_title}>{position}</span>
                    <div className={styles.wrapper}>
                        <div className={styles.employee}>
                            <img className={styles.person_logo} src={person} alt="" /><span>11-50</span>
                        </div>
                        <div className={styles.salary}>
                            <img className={styles.ruppee_logo} src={ruppee} alt="" /><span>{salary}</span>
                        </div>
                        <div className={styles.location}>
                            <img className={styles.flag} src={flag} alt="" /><span>{location}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.jobtype}>
                    <span>{remote_office}</span>
                    <span>{type}</span>
                </div>
            </div>
      </div>
      <div className={styles.jobcard_right_part}>
            <div className={styles.skillboxes}>
                {
                    skills ? skills.map((skill, idx) => (
                        <SkillBox key={idx} skill={skill}></SkillBox>

                    ))
                    : null
                }
            </div>
            <div className={styles.buttons}>
                {
                    isAuthenticated ? <button className={styles.editjob} onClick={handleEditBtn} >Edit job</button> : null
                }
                <button onClick={showFullDetails} className={styles.viewdetails} >View details</button>
            </div>
      </div>
    </div>
  )
}

export default Jobcards
