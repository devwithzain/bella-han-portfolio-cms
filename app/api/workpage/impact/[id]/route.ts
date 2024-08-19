import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { id: string; }; }) {
	try {
		const body = await request.json();
		const { title, heading, imageUrl, images } = body;

		const post = await prisma.workImpactSection.update({
			where: {
				id: params.id,
			},
			data: {
				title,
				heading,
				imageUrl,
				images
			},
		});

		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}
