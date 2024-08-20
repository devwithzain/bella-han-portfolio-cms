import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const getData = await prisma?.workDangerSection.findMany();
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { title1, title2, title3, title4, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, images } = body;
		const post = await prisma?.workDangerSection.create({
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

export async function DELETE(request: Request) {
	try {
		const { id } = await request.json();
		const getData = await prisma?.workDangerSection.delete({
			where: {
				id
			}
		});
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}


