"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImageUpload } from "@/components";
import { useRouter } from "next/navigation";
import { TproductData, productSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddProcess() {
	const [videoUrl, setVideoUrl] = useState("");

	const router = useRouter();
	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { isSubmitting, errors },
	} = useForm<TproductData>({
		resolver: zodResolver(productSchema),
	});

	const onMediaUpload = (url: string) => {
		setVideoUrl(url);
		setValue("videoUrl", url);
	};

	const onSubmits = async (data: TproductData) => {
		data.videoUrl = videoUrl;
		try {
			await axios.post("/api/process", data);
			toast.success("Added Process");
			reset();
			router.push("/dashboard/home");
			router.refresh();
		} catch (error: any) {
			toast.error("Error", error.message);
		}
	};

	return (
		<div className="w-full h-screen bg-white p-10 flex flex-col gap-6">
			<div className="w-full">
				<h1 className="text-[40px] text-black font-serif font-medium">
					Process Details
				</h1>
				<form
					onSubmit={handleSubmit(onSubmits)}
					className="w-full flex items-center justify-between gap-4">
					<div className="relative w-full flex flex-col gap-3">
						<div>
							<input
								{...register("title")}
								placeholder=" "
								type="text"
								className="peer p-4 pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title
							</label>
							{errors.title && (
								<span className="text-red-500">{errors.title.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full">
						<input
							{...register("description")}
							placeholder=" "
							type="text"
							className="peer p-4 pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Description
						</label>
						{errors.description && (
							<span className="text-red-500">{errors.description.message}</span>
						)}
					</div>
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
