import { REVIEWS } from "../constants/reviews";
import { Review } from "./Review";
import avatar from "../../../public/avatar.jpg";

export default function Opinions() {
	return (
		<div className="min-h-[70vh]">
			<h2 className="font-bold text-center text-2xl">
				Co mowią o nas nasi klienci?
			</h2>
			<div className="flex justify-center mt-[100px] gap-[100px] flex-wrap">
				{REVIEWS.map((review) => {
					return (
						<Review
							name={review.name}
							stars={review.stars}
							opinion={review.opinion}
							image={avatar}
						/>
					);
				})}
			</div>
		</div>
	);
}
