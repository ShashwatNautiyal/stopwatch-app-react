import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Timer from './components/Timer';

function App() {
	const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0, miliseconds: 0 });
	const [id, setId] = useState();
	const [toggle, setToggle] = useState(true);

	let timerMinutes = time.minutes,
		timerSeconds = time.seconds,
		timerHours = time.hours,
		timerMiliseconds = time.miliseconds;

	const start = () => {
		setId(setInterval(startTime, 10));
		setToggle(false);
	};

	const stop = () => {
		clearInterval(id);
		setToggle(true);
	};

	const reset = () => {
		clearInterval(id);
		setTime({ hours: 0, minutes: 0, seconds: 0, miliseconds: 0 });
		setToggle(true);
	};

	const startTime = () => {
		if (timerMiliseconds >= 99) {
			timerSeconds += 1;
			timerMiliseconds = 0;
		}
		if (timerSeconds >= 59) {
			timerMinutes += 1;
			timerSeconds = 0;
		}
		if (timerSeconds >= 59) {
			timerHours += 1;
			timerSeconds = 0;
		}
		timerMiliseconds++;
		setTime({
			hours: timerHours,
			minutes: timerMinutes,
			seconds: timerSeconds,
			miliseconds: timerMiliseconds,
		});
	};

	return (
		<div className="app">
			<h1 className="heading">STOP WATCH</h1>
			<Timer time={time} />
			<Buttons start={start} stop={stop} reset={reset} toggle={toggle} />
		</div>
	);
}

export default App;
