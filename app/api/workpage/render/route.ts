import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const getData = await prisma?.workRenderSection.findMany();
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { title, imageUrl, paragraph } = body;
		const post = await prisma?.workRenderSection.create({
			data: {
				title,
				imageUrl,
				paragraph
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
		const getData = await prisma?.workRenderSection.delete({
			where: {
				id
			}
		});
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}


