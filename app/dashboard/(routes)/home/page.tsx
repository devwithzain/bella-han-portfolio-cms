import Image from "next/image";
import { redirect } from "next/navigation";
import GetCurrentUser from "@/actions/getCurrentUser";
import { getAboutSectionData, getSkillsSectionData } from "@/actions/getData";
import { AdminNavbar, EditButton, DeleteButton, Sidebar } from "@/components";

export default async function Service() {
	const currentUser = await GetCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	const responseAbout = await getAboutSectionData();
	const responseLifeCycle = await getSkillsSectionData();
	return (
		<>
			<div className="w-full p-4 flex gap-2">
				<Sidebar />
				<div className="w-[85%] h-full ml-auto flex flex-col gap-4">
					{/* @ts-ignore */}
					<AdminNavbar currentUser={currentUser} />
					{/* home page about section */}
					<div className="gap-4 flex flex-col px-6">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
									About Section Content
								</h1>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											TITLE
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											DESCRIPTION
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											Images
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{responseAbout?.map((item) => (
										<tr key={item.id}>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div>
													<h1 className="text-[15px] text-black font-medium font-sans">
														{item.title}
													</h1>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div>
													<p className="text-[15px] text-black font-medium font-sans">
														{item.paragraph1}
													</p>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												{item.imageUrl && (
													<Image
														src={item.imageUrl}
														alt="img"
														className="w-[100px] h-[100px] object-cover"
														width={100}
														height={100}
													/>
												)}
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div className="flex items-end justify-end gap-4">
													<EditButton
														id={item.id}
														path="/api/homepage/about"
														url="home/about"
													/>
													<DeleteButton
														id={item.id}
														path="/api/homepage/about"
													/>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					{/* home page skills section */}
					<div className="gap-4 flex flex-col px-6">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
									Skills Section Content
								</h1>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											TITLE
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											DESCRIPTION
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											Skills
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											Image
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{responseLifeCycle?.map((item) => (
										<tr key={item.id}>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div>
													<h1 className="text-[15px] text-black font-medium font-sans">
														{item.title}
													</h1>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div>
													<p className="text-[15px] text-black font-medium font-sans">
														{item.heading1}
													</p>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div>
													<p className="text-[15px] text-black font-medium font-sans">
														{item.skillNo1}
													</p>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												{item.images.slice(0, 1).map((img, i) => (
													<Image
														key={i}
														src={img}
														alt="img"
														className="w-[100px] h-[100px]"
														width={200}
														height={200}
													/>
												))}
											</td>
											<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
												<div className="flex items-end justify-end gap-4">
													<EditButton
														id={item.id}
														path="/api/homepage/skills"
														url="home/skills"
													/>
													<DeleteButton
														id={item.id}
														path="/api/homepage/skills"
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
