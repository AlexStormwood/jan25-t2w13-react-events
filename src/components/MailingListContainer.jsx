

// 1. Conditionally render:
//		- Mailing list signup form, if no email is found in component state 
// 		- A "you already signed up" message, if email is found in component state
// 

import React from "react";
import MailingListAlreadySignedUpMessage from "./MailingListAlreadySignUpMessage";


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
			userSignedUp: false
		}
	}

	render(){
		if (this.state.userSignedUp){
			return(
				<div className="mailingListContainer">
					<MailingListAlreadySignedUpMessage />
				</div>
			)
		} else {
			return(
				<div className="mailingListContainer">
					{/* Sign up form */}
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