import React, { useContext } from 'react'
import styles from '../styles/home.module.css'
import { useNavigate, Link } from 'react-router-dom'
import searchIcon from '../assets/searchIcon.png'
import {Keyword} from './Keyword'
import Jobcards from './Jobcards'
import helmentMan from '../assets/helmetMan.png'
import { Context } from '..'
 
const Home = () => {
  const navigate = useNavigate() 
  const {isAuthenticated, setIsAuthenticated} = useContext(Context)  
  setIsAuthenticated(true) 

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
                <input type="text" placeholder='Type any job title'/>
            </div>
            <div className={styles.wrapper}>
              <select className={styles.select} name="Skills">
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
                <Keyword skill={"Frontend"}></Keyword> 
                <Keyword skill={"JavaScript"}></Keyword>
                <Keyword skill={"React"}></Keyword>
                <Keyword skill={"NodeJs"}></Keyword>
                <Keyword skill={"Python"}></Keyword>
                <Keyword skill={"Python"}></Keyword>
              </div> 
                <button className={styles.addjob}>+ Add Job</button>
              <p className={styles.clear}>Clear</p>
            </div>
        </div>
        <br />
        <br />
        {/* <br /> */}
        <Jobcards></Jobcards>
        <Jobcards></Jobcards>
        <Jobcards></Jobcards>
        <Jobcards></Jobcards>
      </main>
    </div>
  )
}

export default Home
