import { TNavbarProps } from "@/types";
import { UserMenu } from "@/components";

export default function AdminNavbar({ currentUser }: TNavbarProps) {
	return (
		<div className="px-8 py-6">
			<div className="w-full flex items-center justify-between gap-3">
				<h1 className="text-[24px] font-Poppins font-semibold uppercase text-[#081226]">
					Dashboard
				</h1>
				<UserMenu currentUser={currentUser} />
			</div>
			<hr className="bg-black text-black w-full mt-2" />
		</div>
	);
}
