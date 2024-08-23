import Form from "../Form";
import prisma from "@/db/prisma";

export default async function EditProcess({
	params,
}: {
	params: { id: string };
}) {
	let response = null;
	try {
		response = await prisma.workSolutionSection.findUnique({
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
				<h1 className="text-[40px] text-black font-Poppins font-medium">
					Edit Content
				</h1>
				<Form response={response} />
			</div>
		</div>
	);
}
