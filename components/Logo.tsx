import Link from "next/link";
import Image from "next/image";
import { eyesvg } from "@/public";

export default function Logo() {
	return (
		<Link
			href={"#"}
			className="flex items-center gap-1 justify-center w-full">
			<Image
				src={eyesvg}
				height="23"
				width="23"
				alt="Logo"
			/>
			<h1 className="text-[24px] font-ProximaNova font-semibold uppercase text-[#081226]">
				Bella Han
			</h1>
		</Link>
	);
}
