"use client";
import { useState } from "react";

export function PriceCalculator() {
	const [options, setOptions] = useState([
		{ index: 0, name: "Mercedes A35 AMG", price: 799 },
		{ index: 1, name: "Audi R8", price: 2137 },
		{ index: 2, name: "Skoda Octavia", price: 399 },
	]);

	const [totalPrice, setTotalPrice] = useState("");
	const [currentOption, setCurrentOption] = useState(0);
	const [days, setDays] = useState("");

	function handleOptionChange(e) {
		setCurrentOption(options[e.target.selectedIndex].index);
	}

	function handleDaysChange(e) {
		setDays(e.target.value);
	}

	function CalculatePrice() {
		const selectedCarPrice = options[currentOption].price;
		const totalPrice = selectedCarPrice * days;
		if (totalPrice !== 0) {
			setTotalPrice(totalPrice);
		}
	}

	return (
		<div className="bg-red-500 p-10 rounded-3xl">
			<div>
				<h2 className="text-bold text-5xl text-center uppercase text-white mb-7">
					oblicz cene wypożyczenia auta
				</h2>
			</div>
			<div className="flex justify-center gap-3 mb-10">
				<select onChange={handleOptionChange}>
					{options.map((option) => {
						return (
							<option key={option.name} value={option.price}>
								{option.name}
							</option>
						);
					})}
				</select>
				<div>
					<input
						className="pl-1"
						type="number"
						value={days}
						placeholder="Liczba dni.."
						onChange={handleDaysChange}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<button
					onClick={CalculatePrice}
					className="border-2 bg-white text-black border-white w-[50%] rounded-2xl py-2 cursor-pointer font-bold uppercase">
					oblicz
				</button>
			</div>
			{totalPrice && (
				<div className="flex justify-center mt-10 uppercase text-white font-bold">{`Cena wynosi: ${totalPrice} zł`}</div>
			)}
		</div>
	);
}
