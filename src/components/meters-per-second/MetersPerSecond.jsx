const MetersPerSecond = ({ speed }) => {
	const kilometersToMeters = speed * 1000;
	const mps = kilometersToMeters / 3600;
	return (
		<p>
			{speed} Km/h son {mps} m/s
		</p>
	);
};
export default MetersPerSecond;
