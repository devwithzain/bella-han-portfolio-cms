"use client";
import Logo from "./Logo";
import Link from "next/link";
import { sideBarItem } from "@/constants";
import { FiLogOut } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
	const router = useRouter();
	const pathName = usePathname();
	return (
		<div className="w-[15%] rounded-lg bg-[#BBB0D2] py-6 px-4 h-[97%] fixed">
			<div className="flex flex-col gap-2">
				<Logo />
				<hr className="bg-black text-black w-full" />
				<h1 className="text-[#081226] text-[16px] font-Poppins uppercase font-medium text-left w-full">
					Main Menu
				</h1>
			</div>
			<div className="w-full flex flex-col justify-between gap-2 py-6">
				<div className="flex flex-col gap-2">
					{sideBarItem.map((item) => (
						<div
							className="group transition-all duration-200 ease-linear"
							key={item.id}>
							<Link
								href={item.href}
								className={`transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226] ${
									pathName === item.href ? "bg-[#081226]" : ""
								}`}>
								<div
									className={`text-[#081226] group-hover:text-white font-Poppins ${
										pathName === item.href ? "text-white" : ""
									}`}>
									{item.icon}
								</div>
								<h1
									className={`text-[#081226] group-hover:text-white font-Poppins ${
										pathName === item.href ? "text-white" : ""
									}`}>
									{item.title}
								</h1>
							</Link>
						</div>
					))}
				</div>
				<div className="absolute bottom-4 left-0 px-4 w-full flex flex-col gap-2">
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 text-[#081226] group-hover:bg-[#081226]">
							<BiSupport
								size={22}
								className="group-hover:text-white text-[#081226] font-Poppins"
							/>
							<h1 className="group-hover:text-white text-[#081226] font-Poppins">
								Support
							</h1>
						</div>
					</div>
					<div
						className="group transition-all duration-200 ease-linear"
						onClick={() => router.push("/user-profile")}>
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<MdOutlineSettings
								size={22}
								className="group-hover:text-white text-[#081226] font-Poppins"
							/>
							<h1 className="group-hover:text-white text-[#081226] font-Poppins">
								Settings
							</h1>
						</div>
					</div>
					<div className="group transition-all duration-200 ease-linear">
						<div className="transition-all duration-200 ease-linear py-2 px-4 rounded-lg cursor-pointer w-full flex items-center gap-2 group-hover:bg-[#081226]">
							<FiLogOut
								size={22}
								className="group-hover:text-white text-[#081226] font-Poppins"
							/>
							<h1 className="group-hover:text-white text-[#081226] font-Poppins">
								Logout
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
