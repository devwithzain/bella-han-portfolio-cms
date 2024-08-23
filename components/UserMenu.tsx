"use client";
import { TUserMenuProps } from "@/types";
import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { useCallback, useState } from "react";
import { MenuItem, Avatar } from "@/components";
import toast from "react-hot-toast";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function UserMenu({ currentUser }: TUserMenuProps) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const handleClick = () => {
		signOut({ callbackUrl: "/" });
		toast.success("Logout");
	};
	return (
		<div className="relative">
			<div className="flex items-center gap-2">
				<div className="">
					<Avatar src={currentUser?.image} />
				</div>
				<h1 className="text-[18px] font-medium text-[#081226] font-Poppins">
					Bella Han
				</h1>
				<div
					onClick={toggleOpen}
					className={`cursor-pointer transition-all duration-200 ease-linear ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}>
					<MdOutlineKeyboardArrowDown size={30} />
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl shadow-md w-fit bg-white overflow-hidden right-0 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						{currentUser && (
							<>
								<MenuItem
									label="Setting"
									onClick={() => router.push("/dashboard/user-profile")}
									icon={<CiSettings size={20} />}
								/>
								<hr />
								<MenuItem
									label="Logout"
									onClick={handleClick}
									icon={<LuLogOut size={20} />}
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
