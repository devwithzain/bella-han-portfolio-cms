import prisma from "@/db/prisma"; // Ensure you have the correct path to prisma instance
import EditForm from "../../EditForm";

export default async function EditService({
	params,
}: {
	params: { id: string };
}) {
	let response = null;
	try {
		response = await prisma.abouttTitle.findUnique({
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
				<h1 className="text-[40px] text-black font-serif font-medium">Edit</h1>
				<EditForm response={response} />
			</div>
		</div>
	);
}
