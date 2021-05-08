import CountdownResult from './CountdownResult';
import React, {useState} from 'react';

function Form(){
	const [time, setTime] = useState();

	let handleSubmit = (e) => {
		e.preventDefault();
		console.log(Date.parse(e.target.startTime.value), Date.now())
		setInterval( () => {
			setTime(Date.parse(e.target.startTime.value) - Date.now())
		},1000)
	}

	return(
		<div>
			<form type = "submit" onSubmit = { handleSubmit }> 
				<input id = "eventName" required placeholder = "Event Name" type = "text"/>
				<input id = "startTime" required type ="date"/>  
				<input type="time"/>
			</form>
			<CountdownResult time = {time}/>
		</div>
	);
}

export default Form;