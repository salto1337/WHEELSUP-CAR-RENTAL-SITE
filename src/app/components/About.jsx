import Image from "next/image";
import mercedesImg from "../../../public/mercedes2.png";
import { Questions } from "./Questions";

export function About() {
	return (
		<div className="mt-[100px] mb-[150px] ">
			<div className="flex flex-col md:flex-row justify-center gap-11 items-center mt-10">
				<div>
					<Image src={mercedesImg} width={550} height={500} alt="auto" />
				</div>
				<div>
					<p className="max-w-[350px]">
						WheelsUp to dynamiczna firma specjalizująca się w wynajmie
						samochodów, zapewniająca niezrównaną wygodę i elastyczność w
						podróżach. Nasza szeroka flota pojazdów, obejmująca modele od
						kompaktowych aut po luksusowe limuzyny, zapewniając odpowiednią
						opcję dla każdej podróży.
					</p>
				</div>
			</div>
			<Questions />
		</div>
	);
}
