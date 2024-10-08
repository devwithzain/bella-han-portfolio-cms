"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImageUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TpageAboutSectionData, homePageAboutSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();
	const [imageUrl, setImageUrl] = useState("");

	const {
		register,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TpageAboutSectionData>({
		resolver: zodResolver(homePageAboutSchema),
		defaultValues: {
			title: response?.title || "",
			paragraph1: response?.paragraph1 || "",
			paragraph2: response?.paragraph2 || "",
			paragraph3: response?.paragraph3 || "",
			paragraph4: response?.paragraph4 || "",
			imageUrl: response?.imageUrl || "",
		},
	});

	const onMediaUpload = (url: string) => {
		setImageUrl(url);
		setValue("imageUrl", url);
	};

	const onSubmits = async (data: TpageAboutSectionData) => {
		try {
			await axios.patch(`/api/homepage/about/${response.id}`, data);
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
					<ImageUpload onImageUpload={onMediaUpload} />
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
