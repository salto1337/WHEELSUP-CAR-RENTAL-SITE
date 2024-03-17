import Image from "next/image";
import star from "../../../public/star.svg";

export function Review({ name, stars, opinion, image }) {
	return (
		<div className="flex flex-col gap-2 border-2 py-5 px-7 rounded-3xl">
			<Image src={image} alt="avatar" width={64} height={64} />
			<h3 className="font-bold">{name}</h3>
			<div className="flex">
				{Array(stars)
					.fill(1)
					.map((_, index) => (
						<Image key={index} src={star} alt="star" width={24} height={24} />
					))}
			</div>

			<p className="max-w-[250px]">{opinion}</p>
		</div>
	);
}
