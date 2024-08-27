"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImagesUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TworkResearchSectionData, workPageResearchSchema } from "@/types";

export default function AddService() {
	const router = useRouter();
	const [uploadedImages, setUploadedImages] = useState<string[]>([]);

	const {
		register,
		reset,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TworkResearchSectionData>({
		resolver: zodResolver(workPageResearchSchema),
	});

	const handleImageUpload = (urls: string[]) => {
		setUploadedImages(urls);
		setValue("images", urls);
	};

	const onSubmits = async (data: TworkResearchSectionData) => {
		try {
			data.images = uploadedImages;
			await axios.post("/api/workpage/research", data);
		} catch (error: any) {
			toast.error("Error", error);
		} finally {
			toast.success("Added");
			reset();
			router.push("/dashboard/work");
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
					<div className="relative w-full flex flex-col gap-3">
						<div>
							<input
								{...register("title")}
								placeholder=" "
								type="text"
								className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title
							</label>
							{errors.title && (
								<span className="text-red-500">{errors.title.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full">
						<input
							{...register("heading")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading
						</label>
						{errors.heading && (
							<span className="text-red-500">{errors.heading.message}</span>
						)}
					</div>
					<ImagesUpload onImageUploads={handleImageUpload} />
					<input
						type="submit"
						value={`${isSubmitting ? "Loading..." : "Submit"}`}
						className="text-[20px] cursor-pointer text-black font-Poppins font-medium bg-white border-2 px-6 py-[18px] rounded-lg"
						disabled={isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
}
