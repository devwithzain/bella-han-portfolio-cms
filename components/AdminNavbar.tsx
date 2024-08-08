import { TNavbarProps } from "@/types";
import { UserMenu } from "@/components";
import { CiSearch } from "react-icons/ci";

export default function AdminNavbar({ currentUser }: TNavbarProps) {
	return (
		<div className="px-8 py-6">
			<div className="w-full flex items-center justify-between gap-3">
				<h1 className="text-[24px] font-ProximaNova font-semibold uppercase text-[#081226]">
					Dashboard
				</h1>
				<div className="flex px-5 py-2 items-center justify-between bg-[#F0F3F4] w-[25%] rounded-full">
					<input
						type="text"
						className="w-full text-[16px] outline-none bg-transparent border-none font-medium"
						placeholder="Search..."
					/>
					<CiSearch size={30} />
				</div>
				<UserMenu currentUser={currentUser} />
			</div>
			<hr className="bg-black text-black w-full mt-2" />
		</div>
	);
}
