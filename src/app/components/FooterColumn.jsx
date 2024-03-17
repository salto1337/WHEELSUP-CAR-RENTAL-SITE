export function FooterColumn({ title, children }) {
	return (
		<div>
			<li>{title}</li>
			<li>{children}</li>
		</div>
	);
}
