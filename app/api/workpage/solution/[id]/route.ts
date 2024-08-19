import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string; }; }) {
	try {
		const body = await request.json();
		const { title, heading, images, subTitle, paragraph } = body;

		const post = await prisma.workSolutionSection.update({
			where: {
				id: params.id,
			},
			data: {
				title,
				subTitle,
				paragraph,
				images,
				heading
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}
