import Link from "next/link";
import { redirect } from "next/navigation";
import GetCurrentUser from "@/actions/getCurrentUser";
import {
	getContactHeroSectionData,
	getContactFormSectionData,
	getContactResumeFile,
} from "@/actions/getData";
import { AdminNavbar, EditButton, DeleteButton, Sidebar } from "@/components";

export default async function Contact() {
	const resumeUrl =
		"https://res.cloudinary.com/dnpqqwyhz/image/upload/v1724698059/osz7vsifpjwio9zbh2ut.pdf";

	const currentUser = await GetCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	const responseContactHero = await getContactHeroSectionData();
	const responseContactForm = await getContactFormSectionData();
	const responseContactResume = await getContactResumeFile();
	return (
		<>
			<div className="w-full p-4 flex gap-2">
				<Sidebar />
				<div className="w-[85%] h-full ml-auto flex flex-col gap-4">
					{/* @ts-ignore */}
					<AdminNavbar currentUser={currentUser} />
					{/* contact page hero section */}
					<div className="gap-4 flex flex-col px-6">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
									Hero Section Content
								</h1>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
											TITLE
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
											Heading
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
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
					<div className="gap-4 flex flex-col px-6">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
									Form Section Content
								</h1>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
											TITLE
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
											Paragraph
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
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
					<div className="gap-4 flex flex-col px-6">
						<div className="w-full flex justify-between items-center gap-4">
							<div>
								<h1 className="text-[35px] font-Poppins font-medium tracking-tighter leading-tight">
									Resume File
								</h1>
							</div>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200">
								<thead>
									<tr>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
											PDF
										</th>
										<th className="border border-gray-200 px-4 py-2 font-Poppins">
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
		</>
	);
}
