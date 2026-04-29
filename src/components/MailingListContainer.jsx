

// 1. Conditionally render:
//		- Mailing list signup form, if no email is found in component state 
// 		- A "you already signed up" message, if email is found in component state
// 

import React from "react";
import MailingListAlreadySignedUpMessage from "./MailingListAlreadySignUpMessage";
import MailingListSignUpForm from "./MailingListSignUpForm";


/* 

Container component
	- state of relevant data
	- conditional logic based on the state
		- Component A, e.g. a signup form
		- Component B, e.g. a "You already did this!" message
*/


export default class MailingListContainer extends React.Component{
	constructor(){
		super();

		this.state = {
			userSignedUp: false,
			userEmail: ""
		}

		this.setUserEmail = this.setUserEmail.bind(this)
		this.signUp = this.signUp.bind(this);
	}

	setUserEmail(newUserEmail) {
		console.log(newUserEmail);
		this.setState((previousState) => {
			return {...previousState, userEmail: newUserEmail}
		});
	}

	signUp(){
		console.log("User has signed up with email of: " + this.state.userEmail);

		// Imaginary API function call goes here
		// send the user email to your backend
		// wait for reponse
		// if response says that the user has signed up successfully,
		// then we update our state here with userSignedUp: true
		// If an error occurred, sanitise and save the errors to state
		// and pass them to the form for the form to show the errors 

		this.setState((previousState) => {
			return {...previousState, userSignedUp: true}
		})
	}

	render(){
		if (this.state.userSignedUp && this.state.userEmail){
			return(
				<div className="mailingListContainer">
					<MailingListAlreadySignedUpMessage />
				</div>
			)
		} else {
			return(
				<div className="mailingListContainer">
					<MailingListSignUpForm 
						currentEmail={this.state.userEmail} 
						updateEmail={this.setUserEmail} 
						submitEmail={this.signUp}
					/>
				</div>
			)
		}
		
	}
}


// export default function MailingListContainer(){

// 	return(
// 		<div className="mailingListContainer">
// 			{/* <MailingListSignUpForm /> */}
// 			{/* <MailingListAlreadySignedUpMessage /> */}
// 		</div>
// 	)
// }