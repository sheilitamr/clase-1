const FahrenheitToCelsius = ({ fahrenheit }) => {
	const celsius = fahrenheit * 1.8 + 32;
	return (
		<p>
			{fahrenheit} grados fahrenheit son {celsius} grados celsius
		</p>
	);
};

export default FahrenheitToCelsius;
