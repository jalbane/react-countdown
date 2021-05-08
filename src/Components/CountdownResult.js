function CountdownResult(props){

	let countdownDays = Math.floor( props.time/(1000*60*60*24) ) //convert milliseconds(ms) to days
	let countdownHours = Math.floor( (props.time/(1000*60*60) % 24) ) //convert ms to hours
	let countdownMinutes = Math.floor( (props.time/(1000*60) % 60) ) //convert ms to minutes
	let countdownSeconds = Math.floor( (props.time/(1000) % 60) )	//convert ms to seconds

	return(
		<div>
			Begins in {`${countdownDays} days, ${countdownHours} : ${countdownMinutes} : ${countdownSeconds} `}
		</div>
	);
}

export default CountdownResult;