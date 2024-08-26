import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const getData = await prisma?.contactHeroSection.findMany();
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { title, heading } = body;
		const post = await prisma?.contactHeroSection.create({
			data: {
				title,
				heading,

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
		const getData = await prisma?.contactHeroSection.delete({
			where: {
				id
			}
		});
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}


