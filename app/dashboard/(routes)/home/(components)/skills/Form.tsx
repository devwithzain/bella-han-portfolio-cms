"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImagesUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TpageSkillSectionData, homePageSkillsSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();
	const [imageUrl, setImageUrl] = useState("");
	const [uploadedImages, setUploadedImages] = useState<string[]>([]);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TpageSkillSectionData>({
		resolver: zodResolver(homePageSkillsSchema),
		defaultValues: {
			title: response?.title || "",
			heading1: response?.heading1 || "",
			heading2: response?.heading2 || "",
			heading3: response?.heading3 || "",
			heading4: response?.heading4 || "",
			heading5: response?.heading5 || "",
			skillNo1: response?.skillNo1 || "",
			skillNo2: response?.skillNo2 || "",
			skillNo3: response?.skillNo3 || "",
			skillNo4: response?.skillNo4 || "",
			skillNo5: response?.skillNo5 || "",
			images: response?.images || [],
		},
	});

	const handleImageUpload = (urls: string[]) => {
		setUploadedImages(urls);
		setValue("images", urls);
	};

	const onSubmits = async (data: TpageSkillSectionData) => {
		try {
			data.images = uploadedImages;
			await axios.patch(`/api/homepage/skills/${response.id}`, data);
			toast.success("Updated");
		} catch (error: any) {
			toast.error("Error updating!");
		} finally {
			router.push("/dashboard/home");
			router.refresh();
		}
	};

	return (
		<div className="w-full h-screen bg-white pt-10">
			<div className="w-full">
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
							{...register("heading1")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading1
						</label>
						{errors.heading1 && (
							<span className="text-red-500">{errors.heading1.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("skillNo1")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							SkillNo1
						</label>
						{errors.skillNo1 && (
							<span className="text-red-500">{errors.skillNo1.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("heading2")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading2
						</label>
						{errors.heading2 && (
							<span className="text-red-500">{errors.heading2.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("skillNo2")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							SkillNo2
						</label>
						{errors.skillNo2 && (
							<span className="text-red-500">{errors.skillNo2.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("heading3")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading3
						</label>
						{errors.heading3 && (
							<span className="text-red-500">{errors.heading3.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("skillNo3")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							SkillNo3
						</label>
						{errors.skillNo3 && (
							<span className="text-red-500">{errors.skillNo3.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("heading4")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading4
						</label>
						{errors.heading4 && (
							<span className="text-red-500">{errors.heading4.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("skillNo4")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							SkillNo4
						</label>
						{errors.skillNo4 && (
							<span className="text-red-500">{errors.skillNo4.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("heading5")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading5
						</label>
						{errors.heading5 && (
							<span className="text-red-500">{errors.heading5.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("skillNo5")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							SkillNo5
						</label>
						{errors.skillNo5 && (
							<span className="text-red-500">{errors.skillNo5.message}</span>
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
