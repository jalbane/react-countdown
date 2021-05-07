import CountdownResult from './CountdownResult';

function Form(){

	let handleSubmit = (e) => {
		e.preventDefault();
		console.log("asdf1")
	}

	return(
		<form type = "submit" onSubmit = { handleSubmit }> 
			<input required placeholder = "Event Name" type = "text"/>
			<input required type ="date"/>  
			<input type="time"/>
		</form>
	);
}

export default Form;