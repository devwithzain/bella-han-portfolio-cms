import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const getData = await prisma?.homeSkillsSection.findMany();
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { title, heading1, heading2, heading3, heading4, heading5, skillNo1, skillNo2, skillNo3, skillNo4, skillNo5, images, } = body;
		const post = await prisma?.homeSkillsSection.create({
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

export async function DELETE(request: Request) {
	try {
		const { id } = await request.json();
		const getData = await prisma?.homeSkillsSection.delete({
			where: {
				id
			}
		});
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}


