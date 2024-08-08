import { redirect } from "next/navigation";
import { AdminNavbar, Sidebar } from "@/components";
import GetCurrentUser from "@/actions/getCurrentUser";

export default async function Academy() {
	const currentUser = await GetCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	return (
		<div className="w-full p-4 flex gap-2">
			<Sidebar />
			<div className="w-[85%] h-full ml-auto">
				{/* @ts-ignore */}
				<AdminNavbar currentUser={currentUser} />
				<div className="px-6">
					<h1>Academy</h1>
				</div>
			</div>
		</div>
	);
}
