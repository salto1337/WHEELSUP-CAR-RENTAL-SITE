import Image from "next/image";
import { PriceWindow } from "./PriceWindow";
import { CarDetails } from "./CarDetails";

export function Car({ name, image, power, year, automatic, price }) {
	return (
		<div className="flex flex-col justify-center mb-[250px] mt-[300px] relative">
			<h2 className="font-bold text-4xl md:text-5xl text-center mb-14">
				{name}
			</h2>
			<div className="flex items-center justify-center">
				<div className="flex flex-col">
					<Image className="mb-5" alt="name" src={image} width={600} />
					<div className="flex mx-auto gap-10 font-bold text-2xl md:text-3xl uppercase">
						<CarDetails power={power} year={year} automatic={automatic} />
					</div>
				</div>
				<div>
					<PriceWindow price={price} />
				</div>
			</div>
		</div>
	);
}
