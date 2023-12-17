import React, { useContext, useRef, useState } from 'react'
import styles from '../styles/addJob.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '..'
import axios from 'axios'
import { server } from '../App'
import toast from 'react-hot-toast'


const JobPage = () => {
    const {loading, setLoading, isAuthenticated, setIsAuthenticated} = useContext(Context)

    const formRef = useRef()
    const navigate = useNavigate()

    const [company_name, setCompany_name] = useState("")
    const [company_logo, setCompany_logo] = useState("")
    const [job_position, setJob_position] = useState("")
    const [monthly_salary, setMonthly_salary] = useState("")
    const [job_type, setJob_type] = useState("")
    const [job_duration , setJob_duration ] = useState("")
    const [remote_office , setRemote_office ] = useState("")
    const [location , setLocation ] = useState("")
    const [job_description , setJob_description ] = useState("")
    const [about_company , setAbout_company ] = useState("")
    const [skills , setSkills ] = useState("")
    const [information , setInformation ] = useState("")
    

    const addJobHandler = async (e) => { 
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post(
                `${server}/add-job`,
                {
                    company_name ,
                    company_logo ,
                    job_position ,
                    monthly_salary ,
                    job_type ,
                    job_duration ,
                    remote_office ,
                    location ,
                    job_description ,
                    about_company ,
                    skills ,
                    information 
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            ); 
            setIsAuthenticated(true)
            setLoading(false)
            formRef.current.reset();
            toast.success(data.message)
        } catch (error) {
            setIsAuthenticated(false)
            setLoading(false)
            toast.error(error.response.data.message)
            console.log(error.response.data.message)
            
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.left_part}>
            <form ref={formRef} onSubmit={addJobHandler} className={styles.form}>
                <p className={styles.heading}>Add job description</p>
                <br /> 
                <div className={styles.pAndInput}>
                    <p>Company Name</p>
                    <input required type="text" name='company_name' onChange={(e) => setCompany_name(e.target.value)} placeholder='Enter your company name here' />
                </div>
                <div className={styles.pAndInput}>
                    <p>Add logo URL</p>
                    <input required type="text" name='company_logo' onChange={(e) => setCompany_logo(e.target.value)} placeholder='Enter the link' />
                </div>
                <div className={styles.pAndInput}>
                    <p>Job position</p>
                    <input required type="text" name='job_position' onChange={(e) => setJob_position(e.target.value)} placeholder='Enter job position' />
                </div>
                <div className={styles.pAndInput}>
                    <p>Monthly salary</p>
                    <input required type="text" name='monthly_salary' onChange={(e) => setMonthly_salary(e.target.value)} placeholder='Enter Amount in rupees' />
                </div>
                <div className={styles.pAndSelect}>
                    <p>Job Type</p>
                    <select required name="job_type" onChange={(e) => setJob_type(e.target.value)}>
                        <option value="">Select</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                    </select> 
                </div>
                <div className={styles.pAndSelect}>
                    <p>Duration</p>
                    <select required name="job_duration" onChange={(e) => setJob_duration(e.target.value)}>
                        <option value="">Select</option>
                        <option value="6 month">6 month</option>
                        <option value="1 year">1 year</option>
                        <option value="2 year">2 year</option>
                    </select> 
                </div>
                <div className={styles.pAndSelect}>
                    <p>Remote/office</p>
                    <select required name="remote_office" onChange={(e) => setRemote_office(e.target.value)}>
                        <option value="">Select</option>
                        <option value="remote">Remote</option>
                        <option value="office">Office</option>
                    </select> 
                </div>
                <div className={styles.pAndInput}>
                    <p>Location</p>
                    <input required type="text" name='location' onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location' />
                </div>
                <div className={styles.pAndInput}>
                    <p>Job Description</p>
                    <textarea rows={4} className={styles.textArea} required type="text" name='job_description' onChange={(e) => setJob_description(e.target.value)} placeholder='Enter Location' />
                </div>
                <div className={styles.pAndInput}>
                    <p>About Company</p>
                    <textarea rows={4} className={styles.textArea} required type="text" name='about_company' onChange={(e) => setAbout_company(e.target.value)} placeholder='Type about your company' />
                </div>
                <div className={styles.pAndInput}>
                    <p>Skills Required</p>
                    <input required type="text" name='skills' onChange={(e) => setSkills(e.target.value)} placeholder='Enter the must have skills' />
                </div>
                <div className={styles.pAndInput}>
                    <p>Information</p>
                    <input required type="text" name='information' onChange={(e) => setInformation(e.target.value)} placeholder='Enter the additional information' />
                </div> 
                <button>+ Add Job</button>
                <input onClick={() => navigate('/')} type="button" value="Cancel"/>
            </form> 
      </div>
      <div className={styles.right_part}>
            {/* using image here  */}
            <p>Recruiter add job details here</p>
      </div>
    </div>
  )
}

export default JobPage
