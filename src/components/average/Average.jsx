const Average = ({ number1, number2, number3 }) => {
	const average = Math.round((number1 + number2 + number3) / 3);
	return (
		<p>
			La media entre {number1}, {number2} y {number3} es {average}
		</p>
	);
};
export default Average;
