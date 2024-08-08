import { THeadingProps } from "@/types";

export default function Heading({ title, subtitle, center }: THeadingProps) {
	return (
		<div className={center ? "text-center" : "text-start"}>
			<div className="text-2xl text-[#1d0f41] font-bold">{title}</div>
			<div className="font-light text-[#1d0f41] mt-2">{subtitle}</div>
		</div>
	);
}
