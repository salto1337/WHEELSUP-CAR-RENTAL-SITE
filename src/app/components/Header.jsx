import Image from "next/image";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";


export function Header() {
	return (
		<header className="py-7 flex justify-between items-center">
			<Logo />
			<Navbar />
		</header>
	);
}
