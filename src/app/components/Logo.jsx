import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export function Logo() {
	return (
		<Link href="/">
			<div className="flex items-center gap-2">
				<Image src={logo} alt="logo" />
				<p className="font-bold text-2xl">
					WHEELS<span className="text-red-500">UP</span>
				</p>
			</div>
		</Link>
	);
}
