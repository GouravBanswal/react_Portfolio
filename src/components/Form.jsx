import React from 'react'
import "./FormStyles.css"
const Form = () => {
  return <div className='form'>
    <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder='Type your message here'></textarea>
        <button className='btn'>Submit</button>
    </form>
  </div>
}

export default Form