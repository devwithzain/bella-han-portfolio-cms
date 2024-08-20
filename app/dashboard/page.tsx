import Image from "next/image";
import { redirect } from "next/navigation";
import GetCurrentUser from "@/actions/getCurrentUser";
import { AdminNavbar, DeleteButton, EditButton, Sidebar } from "@/components";
import {
	getAboutSectionData,
	getDangerSectionData,
	getImpactSectionData,
	getLifeCycleSectionData,
	getMaterialSectionData,
	getModalSectionData,
	getRenderSectionData,
	getResearchSectionData,
	getSkillsSectionData,
	getSolutionSectionData,
	getWorkSectionData,
} from "@/actions/getData";

export default async function Dashboard() {
	const currentUser = await GetCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	const responseAbout = await getAboutSectionData();
	const responseSkills = await getSkillsSectionData();

	const response = await getWorkSectionData();
	const responseModal = await getModalSectionData();
	const responseRender = await getRenderSectionData();
	const responseDnager = await getDangerSectionData();
	const responseImpact = await getImpactSectionData();
	const responseResearch = await getResearchSectionData();
	const responseSolution = await getSolutionSectionData();
	const responseMaterial = await getMaterialSectionData();
	const responseLifeCycle = await getLifeCycleSectionData();
	return (
		<div className="w-full p-4 flex gap-2">
			<Sidebar />
			<div className="w-[85%] h-full ml-auto">
				{/* @ts-ignore */}
				<AdminNavbar currentUser={currentUser} />
				<div className="px-6">
					<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
						Home Page Content
					</h1>
				</div>
				<hr className="pb-5" />
				{/* home page about section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								About Section
							</h1>
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
									<th className="border border-gray-200 px-4 py-2">Images</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseAbout?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.paragraph1}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
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
										<td className="border border-gray-200 px-4 py-2 w-fit">
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
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Skills Section
							</h1>
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
									<th className="border border-gray-200 px-4 py-2">Skills</th>
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseSkills?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.heading1}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.skillNo1}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
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
										<td className="border border-gray-200 px-4 py-2 w-fit">
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
				<div className="px-6 pt-3">
					<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
						Work Page Content
					</h1>
				</div>
				<hr className="pb-5" />
				{/* work page hero section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Hero Section
							</h1>
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
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{response?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.description}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.imageUrl && (
												<Image
													src={item.imageUrl}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											)}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/hero"
													url="work/hero"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/hero"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page research section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Research Section
							</h1>
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
									<th className="border border-gray-200 px-4 py-2">Images</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseResearch?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.heading}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.images.slice(0, 1).map((img, i) => (
												<Image
													key={i}
													src={img}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											))}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/research"
													url="work/research"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/research"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page danger section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Danger Section
							</h1>
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
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseDnager?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title1}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.paragraph1}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.images.slice(0, 1).map((img, i) => (
												<Image
													key={i}
													src={img}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											))}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/danger"
													url="work/danger"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/danger"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page impact section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Impact Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2">TITLE</th>
									<th className="border border-gray-200 px-4 py-2">HEADING</th>
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseImpact?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.heading}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.imageUrl && (
												<Image
													src={item.imageUrl}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											)}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/impact"
													url="work/impact"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/impact"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page solution section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Solution Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2">TITLE</th>
									<th className="border border-gray-200 px-4 py-2">HEADING</th>
									<th className="border border-gray-200 px-4 py-2">
										PARAGRAPH
									</th>
									<th className="border border-gray-200 px-4 py-2">SUBTITLE</th>
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseSolution?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.heading}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.paragraph}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.subTitle}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.images.slice(0, 1).map((img, i) => (
												<Image
													key={i}
													src={img}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											))}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/solution"
													url="work/solution"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/solution"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page lifecycle section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								LifeCycle Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseLifeCycle?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.imageUrl && (
												<Image
													src={item.imageUrl}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											)}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/lifecycle"
													url="work/lifecycle"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/lifecycle"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page material section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Material Section
							</h1>
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
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseMaterial?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.heading}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.imageUrl && (
												<Image
													src={item.imageUrl}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											)}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/material"
													url="work/material"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/material"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page modal section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Modal Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2">TITLE</th>
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseModal?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<h1 className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</h1>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.images.slice(0, 1).map((img, i) => (
												<Image
													key={i}
													src={img}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											))}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/modal"
													url="work/modals"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/modal"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* work page render section */}
				<div className="gap-4 flex flex-col px-6">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[40px] font-ProximaNova font-medium tracking-tighter leading-tight">
								Render Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2">Title</th>
									<th className="border border-gray-200 px-4 py-2">Image</th>
									<th className="border border-gray-200 px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{responseRender?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.title}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div>
												<p className="text-[15px] text-black font-medium font-sans">
													{item.paragraph}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											{item.imageUrl && (
												<Image
													src={item.imageUrl}
													alt="img"
													className="w-[100px] h-[100px]"
													width={800}
													height={400}
												/>
											)}
										</td>
										<td className="border border-gray-200 px-4 py-2 w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/workpage/render"
													url="work/render"
												/>
												<DeleteButton
													id={item.id}
													path="/api/workpage/render"
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
	);
}
