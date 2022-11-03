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
				<h1>ACQUIRE THE UNCANNY ABILITY THAT WILL MAKE YOU AN AWARD-WINNING FICTIONAL WRITER</h1>
				{/* <h1>Acquire The Uncanny Ability <br/>That Will Make You An Award-Winning Fictional Writer</h1> */}
				<h2>You will learn special skills that easily generate interesting ideas <br/>And you will be prepared to never suffer from writer's block</h2>
				<p>Get this unique opportunity to find out how the most prominet fictional writers master the craft that always engage their readers</p>
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
						<input type="submit" id="button" value="YES, I WANT TO BE A WRITER"></input>
					</div>

				</form>
			</div>		
			{/* <div className="clear"></div> */}

		</div>
	)
}

export default Hintergrund

