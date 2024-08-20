import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string; }; }) {
	try {
		const body = await request.json();
		const { title1, title2, title3, title4, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, images } = body;

		const post = await prisma.workDangerSection.update({
			where: {
				id: params.id,
			},
			data: {
				title1,
				title2,
				title3,
				title4,
				paragraph1,
				paragraph2,
				paragraph3,
				paragraph4,
				paragraph5,
				paragraph6,
				images
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}
