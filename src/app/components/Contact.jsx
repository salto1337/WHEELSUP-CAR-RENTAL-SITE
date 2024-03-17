"use client";
export function Contact() {
	function handleSubmit(e) {
		e.preventDefault();
		console.log("FORMULARZ WYSLANY!");
	}
	return (
		<div className="mt-[120px] lg:mt-[5gi0px]">
			<h1 className="text-center font-bold text-3xl lg:text-5xl mb-[100px] lg:mb-[150px] uppercase">
				skontaktuj sie z nami{" "}
			</h1>
			<form onSubmit={handleSubmit} className="border-2 p-10">
				<div className="flex flex-col gap-3 justify-center">
					<label className="block" htmlFor="name">
						E-mail
					</label>
					<input className="border-2" type="text" id="name" />
					<label htmlFor="message">wiadomość</label>
					<input
						className="border-2 h-[100px] px-2"
						type="text"
						id="message"
						autoComplete="off"
					/>
				</div>
				<div className="flex justify-center mt-10">
					<button type="submit" className="w-50 border-2 p-2 rounded-2xl">
						Wyślij
					</button>
				</div>
			</form>
		</div>
	);
}
