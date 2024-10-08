"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ImagesUpload } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { TworkSolutionSectionData, workSolutionImpactSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();
	const [uploadedImages, setUploadedImages] = useState<string[]>([]);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TworkSolutionSectionData>({
		resolver: zodResolver(workSolutionImpactSchema),
		defaultValues: {
			title: response?.title || "",
			heading: response?.heading || "",
			paragraph: response?.paragraph || "",
			subTitle: response?.subTitle || "",
			images: response?.images || "",
		},
	});

	const handleImageUpload = (urls: string[]) => {
		setUploadedImages(urls);
		setValue("images", urls);
	};

	const onSubmits = async (data: TworkSolutionSectionData) => {
		try {
			data.images = uploadedImages;
			await axios.patch(`/api/workpage/solution/${response.id}`, data);
			toast.success("Updated");
		} catch (error: any) {
			toast.error("Error updating!");
		} finally {
			router.push("/dashboard/work");
			router.refresh();
		}
	};

	return (
		<div className="w-full h-screen bg-white pt-10">
			<div className="w-full">
				<form
					onSubmit={handleSubmit(onSubmits)}
					className="w-full flex flex-col gap-4">
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
					<div className="relative w-full">
						<input
							{...register("paragraph")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph
						</label>
						{errors.paragraph && (
							<span className="text-red-500">{errors.paragraph.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("subTitle")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							SubTitle
						</label>
						{errors.subTitle && (
							<span className="text-red-500">{errors.subTitle.message}</span>
						)}
					</div>
					<ImagesUpload onImageUploads={handleImageUpload} />
					<input
						type="submit"
						value={`${isSubmitting ? "Loading..." : "Update"}`}
						className="text-[20px] cursor-pointer text-black font-Poppins font-medium bg-slate-200 px-6 py-3 rounded-lg"
						disabled={isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
}
