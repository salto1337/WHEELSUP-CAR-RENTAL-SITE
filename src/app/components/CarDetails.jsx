export function CarDetails({ power, year, automatic }) {
	return (
		<>
			<p>{`${power}km`}</p>
			<p>{year}</p>
			<p>{`${automatic ? "automat" : "manual"}`}</p>
		</>
	);
}
