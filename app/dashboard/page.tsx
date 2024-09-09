import Image from "next/image";
import { redirect } from "next/navigation";
import GetCurrentUser from "@/actions/getCurrentUser";
import { AdminNavbar, DeleteButton, EditButton, Sidebar } from "@/components";
import {
	getAboutSectionData,
	getContactFormSectionData,
	getContactHeroSectionData,
	getContactResumeFile,
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
import Link from "next/link";

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
	const responseContactResume = await getContactResumeFile();
	const responseContactHero = await getContactHeroSectionData();
	const responseContactForm = await getContactFormSectionData();
	return (
		<div className="w-full p-4 flex gap-2">
			<Sidebar />
			<div className="w-[85%] h-full ml-auto">
				{/* @ts-ignore */}
				<AdminNavbar currentUser={currentUser} />
				<div className="px-6">
					<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
						Home Page Content
					</h1>
				</div>
				<hr className="pb-5" />
				{/* home page about section */}
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								About Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										DESCRIPTION
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Images
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Skills Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										DESCRIPTION
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Skills
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
					<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
						Work Page Content
					</h1>
				</div>
				<hr className="pb-5" />
				{/* work page hero section */}
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Hero Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										DESCRIPTION
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Research Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										DESCRIPTION
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Images
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Danger Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										DESCRIPTION
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Impact Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										HEADING
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Solution Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										HEADING
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										PARAGRAPH
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										SUBTITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								LifeCycle Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Material Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										DESCRIPTION
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Modal Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										TITLE
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				<div className="gap-1 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Render Section
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Title
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Image
									</th>
									<th className="border border-gray-200 px-4 py-2 text-left">
										Actions
									</th>
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
				{/* contact page hero section */}
				<div className="px-6">
					<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
						Contact Page Content
					</h1>
				</div>
				<hr className="pb-5" />
				<div className="gap-2 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Hero Section Content
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
										Heading
									</th>
									<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{responseContactHero?.map((item) => (
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
													{item.heading}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/contactpage/hero"
													url="contact/hero"
												/>
												<DeleteButton
													id={item.id}
													path="/api/contactpage/hero"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* contact page form section */}
				<div className="gap-2 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Form Section Content
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
										Paragraph
									</th>
									<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{responseContactForm?.map((item) => (
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
													{item.paragraph}
												</p>
											</div>
										</td>
										<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/contactpage/form"
													url="contact/form"
												/>
												<DeleteButton
													id={item.id}
													path="/api/contactpage/form"
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				{/* contact page resume file  */}
				<div className="gap-2 flex flex-col px-6 pb-5">
					<div className="w-full flex justify-between items-center gap-4">
						<div>
							<h1 className="text-[24px] font-Poppins font-medium tracking-tighter leading-tight">
								Resume File
							</h1>
						</div>
					</div>
					<div className="overflow-x-auto">
						<table className="min-w-full bg-white border border-gray-200">
							<thead>
								<tr>
									<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
										PDF
									</th>
									<th className="border border-gray-200 px-4 py-2 font-Poppins text-left">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{responseContactResume?.map((item) => (
									<tr key={item.id}>
										<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
											<Link
												href={item.resume}
												download
												target="_blank"
												className="bg-[#081226] text-white text-[16px] font-Poppins px-4 py-2 rounded-md">
												Download Resume
											</Link>
										</td>
										<td className="border border-gray-200 px-4 py-2 font-Poppins w-fit">
											<div className="flex items-end justify-end gap-4">
												<EditButton
													id={item.id}
													path="/api/contactpage/resume"
													url="contact/resume"
												/>
												<DeleteButton
													id={item.id}
													path="/api/contactpage/resume"
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
