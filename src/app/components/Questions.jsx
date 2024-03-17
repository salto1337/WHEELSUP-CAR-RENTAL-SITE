import { QUESTIONS } from "../constants/questions";
import { Question } from "./Question";

export function Questions() {
	return (
		<div className="mt-[100px]">
			<div>
				{QUESTIONS.map((question) => {
					return (
						<Question
							key={question.question}
							name={question.question}
							answer={question.answer}
						/>
					);
				})}
			</div>
		</div>
	);
}
