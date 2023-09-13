import React from 'react'
import "../components/FooterStyle.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return <>
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Satara Pariser Plot.No:06 Gat.No:82</p>
                        <p>Aurangabad.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    9370424437
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    gouravbanswal@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Gourav Banswal. Web Developer from SKILLHUB. I enjoy discussing new project and designe challenges </p>
                <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Footer