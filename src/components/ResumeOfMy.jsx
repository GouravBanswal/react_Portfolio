import React from 'react'
import Resume from '../assets/resume.png'
import "./ResumeOfMyStyles.css"
const ResumeOfMy = () => {
  return <div>
    <a className='img' href="https://drive.google.com/file/d/1-jK5JDHfyUXwPf6T2YRQKZvLmN0EH8UR/view">
  <button type="button" style={{padding:"18px",borderRadius:"8px",color:"black",backgroundColor:"yellow", marginLeft:"45%",width:"240px", marginBottom:"20px" }}>Download</button>
    </a>
   
  <img style={{width:"50%",marginLeft:"25%" }} src={Resume} alt="" />
  
  </div>
}

export default ResumeOfMy