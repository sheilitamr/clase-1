const TotalPrice = ({ price }) => {
	const total = price + price * 0.21;
	return <p>El precio con IVA es de {total}</p>;
};

export default TotalPrice;
