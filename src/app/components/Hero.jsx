import Image from "next/image";
import hero from "../../../public/hero.png";

export function Hero() {
	return (
		<div className=" mt-20 flex flex-col md:flex-row gap-7 md:items-center mb-[150px] md:mb-[220px] lg:mb-[300px]">
			<div className="flex-1">
				<h1 className="font-bold text-5xl lg:text-6xl max-w-[300px] leading-[75px]">
					TWÓJ <span className="text-red-500 mr-1">KLUCZ</span>
					DO MOBILNOŚCI
				</h1>
				<p className="mt-10 text-gray-500 max-w-[470px] ">
					Bez względu na cel podróży, nasza wypożyczalnia zapewnia elastyczne
					warunki oraz konkurencyjne ceny, aby każdy mógł spełnić swoje marzenia
					o niezapomnianym wyjeździe.
				</p>
				<div className="mt-10 flex gap-10 flex-col md:flex-row">
					<button className="border-2 border-red-500 text-l rounded-2xl py-2  md:w-[150px] font-medium transition-all hover:bg-red-500 hover:text-white">
						REZERWACJA
					</button>
					<button className="text-white bg-red-500 border-2 border-red-500    md:w-[150px] rounded-2xl py-2 px-2 font-medium  transition-all  hover:bg-white hover:text-black">
						LOKALIZACJA
					</button>
				</div>
			</div>
			<div className="order-first md:order-1">
				<Image src={hero} alt="auto" width={800} height={800} />
			</div>
		</div>
	);
}
