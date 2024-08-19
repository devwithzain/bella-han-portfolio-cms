"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImageUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TworkDangerSectionData, workPageDangerSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();
	const [imageUrl, setImageUrl] = useState<string>();

	const {
		register,
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TworkDangerSectionData>({
		resolver: zodResolver(workPageDangerSchema),
		defaultValues: {
			title: response?.title || "",
			heading: response?.heading || "",
			imageUrl: response?.imageUrl || "",
		},
	});

	const onImageUpload = (url: string) => {
		setImageUrl(url);
		setValue("imageUrl", url);
	};

	const onSubmits = async (data: TworkDangerSectionData) => {
		try {
			await axios.patch(`/api/workpage/danger/${response.id}`, data);
			toast.success("Updated");
		} catch (error: any) {
			toast.error("Error updating!");
		} finally {
			router.push("/dashboard/portfolio");
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
							{...register("heading")}
							placeholder=" "
							type="text"
							className="peer p-4 pt-6 w-full font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
						/>
						<label className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 left-0 pl-6 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
							Heading
						</label>
						{errors.heading && (
							<span className="text-red-500">{errors.heading.message}</span>
						)}
					</div>
					<ImageUpload onImageUpload={onImageUpload} />
					<input
						type="submit"
						value={`${isSubmitting ? "Loading..." : "Update"}`}
						className="text-[20px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg"
						disabled={isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
}
