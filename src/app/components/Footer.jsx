import Link from "next/link";
import { FOOTER_LINKS } from "../constants/footerlinks";
import { FooterColumn } from "./FooterColumn";
import { FOOTER_OFFER_LINK } from "../constants/footerlinks";
import { Logo } from "./Logo";

export function Footer() {
	return (
		<footer className="  mt-[200px] mb-[100px]">
			<div className="flex gap-[200px]">
				<ul className="grid grid-cols-2 md:grid-cols-2 gap-[80px] lg:flex lg:gap-[200px]">
					<Logo />
					{FOOTER_LINKS.map((columns) => {
						return (
							<FooterColumn key={columns.title}>
								<h4 className="font-bold">{columns.title}</h4>
								{columns.links.map((link) => {
									return <p key={link}>{link}</p>;
								})}
							</FooterColumn>
						);
					})}
					{FOOTER_OFFER_LINK.map((columns) => {
						return (
							<FooterColumn key={columns.title}>
								<h4 className="font-bold">{columns.title}</h4>
								{columns.links.map((link) => {
									return (
										<Link className="block" key={link} href="/">
											{link}
										</Link>
									);
								})}
							</FooterColumn>
						);
					})}
				</ul>
			</div>
			<div className="border-t-2 border-500-gray mt-10 text-center">
				<p className="mt-10">
					&copy; 2024 WHEELSUP. Wszelkie prawa zastrzeżone.
				</p>
			</div>
		</footer>
	);
}
