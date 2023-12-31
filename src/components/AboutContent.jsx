import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import React from 'react'
import ReactDeveloper from '../assets/React-Developer.jpg'
import reactjs from '../assets/reactjs.jpg'

const AboutContent = () => {
  return <>
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>Im a react front-end developer. I create responsive website for my upComing project. </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ReactDeveloper}  className="img" />
                </div>
                <div className="img-stack bottom">
                    <img src={reactjs}  className="img"/>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default AboutContent