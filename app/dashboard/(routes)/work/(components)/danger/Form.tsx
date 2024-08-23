"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImagesUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TworkDangerSectionData, workPageDangerSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();
	const [uploadedImages, setUploadedImages] = useState<string[]>([]);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TworkDangerSectionData>({
		resolver: zodResolver(workPageDangerSchema),
		defaultValues: {
			title1: response?.title1 || "",
			title2: response?.title2 || "",
			title3: response?.title3 || "",
			title4: response?.title4 || "",
			paragraph1: response?.paragraph1 || "",
			paragraph2: response?.paragraph2 || "",
			paragraph3: response?.paragraph3 || "",
			paragraph4: response?.paragraph4 || "",
			paragraph5: response?.paragraph5 || "",
			paragraph6: response?.paragraph6 || "",
			images: response?.images || [],
		},
	});

	const handleImageUpload = (urls: string[]) => {
		setUploadedImages(urls);
		setValue("images", urls);
	};

	const onSubmits = async (data: TworkDangerSectionData) => {
		try {
			data.images = uploadedImages;
			await axios.patch(`/api/workpage/danger/${response.id}`, data);
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
								{...register("title1")}
								placeholder=" "
								type="text"
								className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title1
							</label>
							{errors.title1 && (
								<span className="text-red-500">{errors.title1.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full flex flex-col gap-3">
						<div>
							<input
								{...register("title2")}
								placeholder=" "
								type="text"
								className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title2
							</label>
							{errors.title2 && (
								<span className="text-red-500">{errors.title2.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full flex flex-col gap-3">
						<div>
							<input
								{...register("title3")}
								placeholder=" "
								type="text"
								className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title3
							</label>
							{errors.title3 && (
								<span className="text-red-500">{errors.title3.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full flex flex-col gap-3">
						<div>
							<input
								{...register("title4")}
								placeholder=" "
								type="text"
								className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
							/>
							<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
								Title4
							</label>
							{errors.title4 && (
								<span className="text-red-500">{errors.title4.message}</span>
							)}
						</div>
					</div>
					<div className="relative w-full">
						<input
							{...register("paragraph1")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph1
						</label>
						{errors.paragraph1 && (
							<span className="text-red-500">{errors.paragraph1.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("paragraph2")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph2
						</label>
						{errors.paragraph2 && (
							<span className="text-red-500">{errors.paragraph2.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("paragraph3")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph3
						</label>
						{errors.paragraph3 && (
							<span className="text-red-500">{errors.paragraph3.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("paragraph4")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph4
						</label>
						{errors.paragraph4 && (
							<span className="text-red-500">{errors.paragraph4.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("paragraph5")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph5
						</label>
						{errors.paragraph5 && (
							<span className="text-red-500">{errors.paragraph5.message}</span>
						)}
					</div>
					<div className="relative w-full">
						<input
							{...register("paragraph6")}
							placeholder=" "
							type="text"
							className="peer p-4 font-Poppins pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 font-Poppins transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Paragraph6
						</label>
						{errors.paragraph6 && (
							<span className="text-red-500">{errors.paragraph6.message}</span>
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
