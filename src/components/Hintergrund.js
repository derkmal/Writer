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
				<h1>Acquire The Uncanny Ability <br/>That Will Make You An Award-Winning Fictional Writer</h1>
				<h2>You will learn a special set of skills that easily generate interesting ideas. <br/>And you will be ready to never suffer from writer's block</h2>
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

