import Link from "next/link";
import { redirect } from "next/navigation";
import GetCurrentUser from "@/actions/getCurrentUser";
import { getAboutHeroData } from "@/actions/getData";
import { AdminNavbar, EditButton, DeleteButton, Sidebar } from "@/components";

export default async function Home() {
	const currentUser = await GetCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	const response = await getAboutHeroData();
	return (
		<>
			<div className="w-full p-4 flex gap-2">
				<Sidebar />
				<div className="w-[85%] h-full ml-auto">
					{/* @ts-ignore */}
					<AdminNavbar currentUser={currentUser} />
					<div className="gap-4 flex flex-col px-6">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[40px] font-serif font-medium">
									Hero Section
								</h1>
							</div>
							<div>
								<Link
									href="/dashboard/about/add-process"
									className="text-[16px] cursor-pointer font-serif font-medium bg-[#081226] text-white px-6 py-3 rounded-lg">
									Add New
								</Link>
							</div>
						</div>

						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2">TITLE</th>
										<th className="border border-gray-200 px-4 py-2">
											HEADING
										</th>
										<th className="border border-gray-200 px-4 py-2">
											ACTIONS
										</th>
									</tr>
								</thead>
								<tbody>
									{response?.map((item) => (
										<tr key={item.id}>
											<td className="border border-gray-200 px-4 py-2 w-[20%]">
												<div>
													<h1 className="text-[15px] text-black font-medium font-sans">
														{item.title}
													</h1>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 w-[60%]">
												<div>
													<p className="text-[15px] text-black font-medium font-sans">
														{item.heading}
													</p>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 w-[10%]">
												<div className="flex items-end justify-end gap-4">
													<EditButton
														id={item.id}
														path="/api/aboutpage/hero"
														url="about/post"
													/>
													<DeleteButton
														id={item.id}
														path="/api/aboutpage/hero"
													/>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
