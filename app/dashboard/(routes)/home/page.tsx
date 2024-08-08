import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import GetCurrentUser from "@/actions/getCurrentUser";
import { getData, getProcess } from "@/actions/getData";
import { AdminNavbar, EditButton, DeleteButton, Sidebar } from "@/components";

export default async function Home() {
	const currentUser = await GetCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	const response = await getData();
	const responseProcess = await getProcess();
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
									Services Management
								</h1>
							</div>
							<div>
								<Link
									href="/dashboard/home/add-product"
									className="text-[16px] cursor-pointer font-serif font-medium bg-[#081226] text-white px-6 py-3 rounded-lg">
									Add Service
								</Link>
							</div>
						</div>

						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2">TITLE</th>
										<th className="border border-gray-200 px-4 py-2">
											DESCRIPTION
										</th>
										<th className="border border-gray-200 px-4 py-2">MEDIA</th>
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
														{item.description}
													</p>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 w-[10%]">
												{item.imageUrl && (
													<Image
														src={item.imageUrl}
														alt="image"
														width={100}
														height={100}
														className="w-full object-cover"
													/>
												)}
											</td>
											<td className="border border-gray-200 px-4 py-2 w-[10%]">
												<div className="flex items-end justify-end gap-4">
													<EditButton
														id={item.id}
														path="/api/post"
														url="home/post"
													/>
													<DeleteButton
														id={item.id}
														path="/api/post"
													/>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="gap-4 flex flex-col px-6 mt-4">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[40px] font-serif font-medium">
									Process Management
								</h1>
							</div>
							<div>
								<Link
									href="/dashboard/home/add-process"
									className="text-[16px] cursor-pointer font-serif font-medium bg-[#081226] text-white px-6 py-3 rounded-lg">
									Add Process
								</Link>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2">TITLE</th>
										<th className="border border-gray-200 px-4 py-2">
											DESCRIPTION
										</th>
										<th className="border border-gray-200 px-4 py-2">MEDIA</th>
										<th className="border border-gray-200 px-4 py-2">
											ACTIONS
										</th>
									</tr>
								</thead>
								<tbody>
									{responseProcess?.map((item) => (
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
														{item.description}
													</p>
												</div>
											</td>
											<td className="border border-gray-200 px-4 py-2 w-[10%]">
												<video
													muted
													controls>
													{item.videoUrl && (
														<source
															src={item.videoUrl}
															type="video/mp4"
															className="w-full h-full object-cover"
														/>
													)}
												</video>
											</td>
											<td className="border border-gray-200 px-4 py-2 w-[10%]">
												<div className="flex items-end justify-end gap-4">
													<EditButton
														id={item.id}
														path="/api/process"
														url="home/process"
													/>
													<DeleteButton
														id={item.id}
														path="/api/process"
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
