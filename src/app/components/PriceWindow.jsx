export function PriceWindow({ price }) {
	return (
		<div className="bg-red-500 py-7 w-[300px] absolute rounded-3xl left-[50%] translate-x-[-50%] top-[-115px] lg:left-[82%] lg:top-[50px]">
			<div>
				<h2 className="text-center text-white text-bold text-3xl ">
					{`${price}zł / dzień`}
				</h2>
			</div>
		</div>
	);
}
