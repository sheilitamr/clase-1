const CalculateCicleArea = ({ radius }) => {
	const area = Math.round(Math.PI * Math.pow(radius, 2));
	return <p>El área del círculo es {area}</p>;
};
export default CalculateCicleArea;
