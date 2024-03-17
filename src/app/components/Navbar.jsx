"use client";

import Link from "next/link";
import { NAV_LINKS } from "../constants/navigation";
import Image from "next/image";
import burger from "../../../public/burger.png";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

export function Navbar() {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false);
	const isMobile = useMediaQuery("(max-width: 767px)");

	if (!isMobile && isMobileNavShown) {
		setIsMobileNavShown(false);
	}
	return (
		<>
			<nav
				className={`${
					isMobileNavShown
						? " absolute right-2  bg-white z-20 top-[100px] w-[50%] opacity-[0.9] min-h-[500vh] text-center font-bold"
						: "hidden"
				} md:block lg:block`}>
				<ul
					className={`flex gap-10 ${isMobileNavShown ? "flex flex-col" : ""}`}>
					{NAV_LINKS.map((link) => {
						return (
							<li className=" transition-all hover:font-bold" key={link.key}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<Image
				onClick={() => {
					setIsMobileNavShown((prevValue) => !prevValue);
				}}
				className=" md:hidden lg:hidden"
				src={burger}
				alt="burger-button"
				width={32}
				height={32}
			/>
		</>
	);
}
