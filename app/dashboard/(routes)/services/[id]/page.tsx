import prisma from "@/db/prisma";
import { EditFormSer } from "@/components";

export default async function EditProcess({
	params,
}: {
	params: { id: string };
}) {
	let response = null;
	try {
		response = await prisma.servicePage.findUnique({
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
					Edit Service
				</h1>
				<EditFormSer response={response} />
			</div>
		</div>
	);
}
