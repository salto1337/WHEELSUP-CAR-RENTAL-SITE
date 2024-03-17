import { Car } from "./components/Car";
import { Hero } from "./components/Hero";
import mercedesA35Img from "../../public/mercedes1.png";
import audiR8Img from "../../public/audir8.png";
import skodaImg from "../../public/skoda.png";
import { PriceCalculator } from "./components/PriceCalculator";

export default function Home() {
	return (
		<main>
			<Hero />
			<Car
				name="MERCEDES A-35 AMG"
				image={mercedesA35Img}
				power={400}
				year={2020}
				automatic={true}
				price={799}
			/>
      <Car
				name="AUDI R8"
				image={audiR8Img}
				power={650}
				year={2021}
				automatic={true}
				price={2137}
			/>
      <Car
				name="SKODA OCTAVIA"
				image={skodaImg}
				power={110}
				year={2001}
				automatic={false}
				price={139}
			/>
      <PriceCalculator />
		</main>
	);
}
