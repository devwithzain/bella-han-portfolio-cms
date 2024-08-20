import prisma from "@/db/prisma";
import Form from "../Form";

export default async function EditProcess({
	params,
}: {
	params: { id: string };
}) {
	let response = null;
	try {
		response = await prisma.workHeroSection.findUnique({
			where: {
				id: params.id,
			},
		});
	} catch (error) {
		console.log("Error", error);
	}

	return (
		<div className="w-full h-screen bg-white p-10 flex flex-col gap-6">
			<div className="w-full">
				<h1 className="text-[40px] text-black font-serif font-medium">
					Edit Content
				</h1>
				<Form response={response} />
			</div>
		</div>
	);
}
