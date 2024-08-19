import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string; }; }) {
	try {
		const body = await request.json();
		const { title, heading, imageUrl } = body;

		const post = await prisma.workMaterialsSection.update({
			where: {
				id: params.id,
			},
			data: {
				title,
				heading,
				imageUrl
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}
