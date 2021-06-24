const Buttons = ({ start, stop, toggle, reset }) => {
	return (
		<div className="buttons">
			{toggle ? (
				<div>
					<button className="start-stop" onClick={start}>
						Start
					</button>
					<button className="reset" onClick={reset}>
						Reset
					</button>
				</div>
			) : (
				<div>
					<button className="start-stop" onClick={stop}>
						stop
					</button>
					<button className="reset" onClick={reset}>
						Reset
					</button>
				</div>
			)}
		</div>
	);
};

export default Buttons;
