import React from "react";
// import myImage from '../images/2.jpg';
import './Hintergrund.css';

const Hintergrund = () => {
	const greet = () => {
		alert("Hallo");
	};

	return (
		<div className="background">
			<div className="overlay"></div>

			<div className="myText">
				<h1>LEARN THE SIMPLE TACTIC I USED TO RANK #1 FOR "ONLINE MARKETING"</h1>
				<h2>Enter your email to get the same cheatsheet <br/>Neil Patel uses for SEO.</h2>
			</div>

			<div className="myFormContainer">
				<form className="myForm">
					<div className="myFormField">
						<input type="text" name="name" placeholder="Name"/>
					</div>

					<div className="myFormField">
						<input type="text" name="email" placeholder="Email"/>
					</div>

					<div onClick={greet}>
						<input type="submit" value="Download"></input>
					</div>
				</form>
			</div>		

		</div>
	)
}

export default Hintergrund

