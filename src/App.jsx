import Average from './components/average/Average';
import CalculateCicleArea from './components/calculate-circle-area/CalculateCircleArea';
import CalculateSquareArea from './components/calculate-square-area/CalculateSquareArea';
import CalculateTriangleArea from './components/calculate-triangle-area/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsius-to-fahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheit-to-celsius/FahrenheitToCelsius';
import MetersPerSecond from './components/meters-per-second/MetersPerSecond';
import SayHello from './components/say-hello/SayHello';
import TotalPrice from './components/total-price/TotalPrice';
import WriteMessage from './components/write-message/WriteMessage';

const App = () => {
	return (
		<>
			<SayHello name='Sheila' />
			<CalculateSquareArea side={4} />
			<CalculateTriangleArea base={6} height={5} />
			<CalculateCicleArea radius={2.1} />
			<FahrenheitToCelsius fahrenheit={5} />
			<CelsiusToFahrenheit celsius={41} />
			<TotalPrice price={15} />
			<WriteMessage
				name='Sheila'
				material='madera'
				size='grande'
				note='Gracias'
			/>
			<Average number1={6} number2={5} number3={8} />
			<MetersPerSecond speed={120} />
		</>
	);
};

export default App;
