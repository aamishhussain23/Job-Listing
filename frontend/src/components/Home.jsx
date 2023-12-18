import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import { useNavigate, Link } from 'react-router-dom'
import searchIcon from '../assets/searchIcon.png'
import {Keyword} from './Keyword'
import Jobcards from './Jobcards'
import helmentMan from '../assets/helmetMan.png'
import { Context } from '..'
import axios from 'axios'
import { server } from '../App'
import toast from 'react-hot-toast'
 
const Home = () => {
  const navigate = useNavigate() 
  const {isAuthenticated, setIsAuthenticated} = useContext(Context)  
  const [job_title, setJob_title] = useState("")
  const [skillsArr, setSkillsArr] = useState([])
  const [jobs, setJobs] = useState([{}])
  // setIsAuthenticated(true) 
  console.log(job_title)
  console.log(skillsArr)

  const addSkills = (e) => {
      const selectedSkill = e.target.value
      if(selectedSkill !== ""){

        if(!skillsArr.includes(selectedSkill)){
            setSkillsArr([...skillsArr, selectedSkill])
        }
        // console.log(skillsArr)

      }
  }

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const { data } = await axios.post(
          `${server}/searchJob`,
          { job_position : job_title, skills: skillsArr },
          { withCredentials: true, headers: { "Content-Type": "application/json" } }
        );
        console.log("api data",data)
        setJobs(data.jobs);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  
    getAllJobs();
  }, [skillsArr, job_title]);
  
  // console.log("jobs array",jobs)

  return (
    <div className={styles.container}> 
      <header className={styles.header}>
          <p className={styles.logo}>Jobfinder</p> 
          <div className={`${styles.buttons} ${isAuthenticated ? styles.logoutWidth : styles.btnWidth}`}> 
            {
              isAuthenticated ? 
              <>
                <Link className={styles.logout}>Logout</Link>
                <span className={styles.greet}>Hello! Recruiter</span>
                <img className={styles.recruiter_img} src={helmentMan} alt="" />
              </> 

              :

              <>
                  <button className={styles.login} onClick={() => navigate('/login')}>Login</button>
                  <button className={styles.register} onClick={() => navigate('/register')}>Register</button>
              </>

            }
              
          </div>
      </header>

      <main className={styles.main}>
        <div className={styles.searchArea}>
            <div className={styles.search}>
                <img src={searchIcon} alt="" />
                <input onChange={(e) => setJob_title(e.target.value)} type="text" placeholder='Type any job title'/>
            </div>
            <div className={styles.wrapper}>
              <select onChange={addSkills} className={styles.select} name="Skills">
                <option value="">Skills</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                <option value="nodejs">NodeJs</option>
                <option value="express">Express</option>
                <option value="mongodb">MongoDB</option>
                <option value="python">python</option>
              </select>
              <div className={styles.keywords}> 
                {
                  skillsArr ? skillsArr.map((skill, idx) => (
                    <Keyword id={idx} setSkillsArr={setSkillsArr} key={idx} skill={skill}></Keyword>
                    
                  )) :  null
                } 
                
              </div>  
                <button onClick={() => navigate('/add-job')} className={styles.addjob}>+ Add Job</button>
              <p onClick={() => setSkillsArr([])} className={styles.clear}>Clear</p>
            </div>
        </div>
        <br />
        <br />
        {/* <br /> */}
        {
          jobs ? jobs.map((e) => (
            <Jobcards 
            key={e._id} 
            position={e.job_position?.toUpperCase()}
            name={e.company_name} 
            salary={e.monthly_salary}
            location={e.location}
            remote_office={e.remote_office}
            type={e.job_type}
            skills={e.skills}
            ></Jobcards>
          )) : null
        }
        {/* <Jobcards></Jobcards>
        <Jobcards></Jobcards>
        <Jobcards></Jobcards> */}
      </main>
    </div>
  )
}

export default Home
