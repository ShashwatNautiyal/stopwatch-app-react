const Timer = ({ time }) => {
	return (
		<div className="timer">
			<h1 className="hours">{'0' + time.hours}</h1>
			<h1 className="minutes">{'0' + time.minutes}</h1>
			<h1 className="seconds">{('0' + time.seconds.toString()).slice(-2)}</h1>
			<h1 className="miliseconds">{('0' + time.miliseconds.toString()).slice(-2)}</h1>
		</div>
	);
};

export default Timer;
