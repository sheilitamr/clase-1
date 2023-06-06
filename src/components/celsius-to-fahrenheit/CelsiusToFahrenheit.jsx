const CelsiusToFahrenheit = ({ celsius }) => {
	const fahrenheit = (celsius - 32) / 1.8;
	return (
		<p>
			{celsius} grados celsius son {fahrenheit} grados Fahrenheit
		</p>
	);
};

export default CelsiusToFahrenheit;
