import React from "react";
import myImage from '../images/2.jpg';


const Hintergrund = () => {
  return (
    <div className="background">
		<img src={myImage} alt="Schriftsteller" style={{width:'100%', zIndex:0}}/>

    	<div className="overlay" style={{zindex:1}}></div>
		<h1 style={{zindex:1}}>LEARN THE SIMPLE TACTIC I USED TO RANK #1 FOR "ONLINE MARKETING"</h1>
		<h2 style={{zindex:1}}>Enter your email to get the same cheatsheet <br/>Neil Patel uses for SEO.</h2>
    </div>
  )
}

export default Hintergrund

