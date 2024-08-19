"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImageUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TworkLifeCycleSectionData, workPageLifeCycleSchema } from "@/types";

export default function AddService() {
	const [imageUrl, setImageUrl] = useState("");

	const router = useRouter();
	const {
		reset,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TworkLifeCycleSectionData>({
		resolver: zodResolver(workPageLifeCycleSchema),
	});

	const onMediaUpload = (url: string) => {
		setImageUrl(url);
		setValue("imageUrl", url);
	};

	const onSubmits = async (data: TworkLifeCycleSectionData) => {
		try {
			await axios.post("/api/workpage/lifecycle", data);
		} catch (error: any) {
			toast.success("Error", error);
		} finally {
			toast.success("Added");
			reset();
			router.push("/dashboard/portfolio");
			router.refresh();
		}
	};

	return (
		<div className="w-full h-screen bg-white p-10 flex flex-col gap-6">
			<div className="w-full flex flex-col gap-10">
				<h1 className="text-[40px] text-black font-ProximaNova font-semibold">
					Content Details
				</h1>
				<form
					onSubmit={handleSubmit(onSubmits)}
					className="w-full flex flex-col items-center justify-between gap-10">
					<ImageUpload onImageUpload={onMediaUpload} />
					<input
						type="submit"
						value={`${isSubmitting ? "Loading..." : "Submit"}`}
						className="text-[20px] cursor-pointer text-black font-serif font-medium bg-white border-2 px-6 py-[18px] rounded-lg"
						disabled={isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
}
