

export default function MailingListSignUpForm(props){

	return(
		<div className="mailingListSignUpForm">

			<label htmlFor="userEmail">Email:</label>
			<input 
				type="email" 
				name="userEmail" 
				id="userEmail" 
				// defaultValue={props.currentEmail} 
				value={props.currentEmail}
				onChange={(event) => props.updateEmail(event.target.value)}
			/>

			<button onClick={() => props.submitEmail() } type="submit">
				Sign up for Mailing List
			</button>

		</div>
	)
}