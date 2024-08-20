import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string; }; }) {
	try {
		const body = await request.json();
		const { title, paragraph1, paragraph2, paragraph3, paragraph4, imageUrl } = body;


		const post = await prisma.homeAboutSection.update({
			where: {
				id: params.id,
			},
			data: {
				title,
				paragraph1,
				paragraph2,
				paragraph3,
				paragraph4,
				imageUrl
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}
