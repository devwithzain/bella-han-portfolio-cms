import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string; }; }) {
	try {
		const body = await request.json();
		const { title, heading1, heading2, heading3, heading4, heading5, skillNo1, skillNo2, skillNo3, skillNo4, skillNo5, images, } = body;

		const post = await prisma.homeSkillsSection.update({
			where: {
				id: params.id,
			},
			data: {
				title,
				heading1,
				heading2,
				heading3,
				heading4,
				heading5,
				skillNo1,
				skillNo2,
				skillNo3,
				skillNo4,
				skillNo5,
				images,
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}
