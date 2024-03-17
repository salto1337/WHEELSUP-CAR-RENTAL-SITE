"use client";
import { useState } from "react";
import PLUS_ICON from "../../../public/plus.svg";
import Image from "next/image";

export function Question({ name, answer }) {
	const [isAnswerShown, setIsAnswerShown] = useState(false);

	function handleShowAnswer() {
		setIsAnswerShown((prevValue) => !prevValue);
	}
	return (
		<div
			onClick={handleShowAnswer}
			className="bg-gray-500 mb-3 px-3 py-5 transition-all cursor-pointer relative">
			<h3 className="font-bold md:text-3xl text-white">{name}</h3>
			<Image
				className={`absolute transition-all right-1  md:right-5 top-5 ${
					isAnswerShown ? "rotate-45" : "rotate-0"
				}`}
				src={PLUS_ICON}
				alt="plus"
				width={32}
			/>
			{isAnswerShown && (
				<div>
					<p className=" text-white border-t-2 border-gray-400 mt-2">
						{answer}
					</p>
				</div>
			)}
		</div>
	);
}
