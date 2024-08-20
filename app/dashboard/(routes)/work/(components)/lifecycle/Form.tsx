"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ImageUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TworkLifeCycleSectionData, workPageLifeCycleSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();
	const [imageUrl, setImageUrl] = useState("");

	const {
		setValue,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TworkLifeCycleSectionData>({
		resolver: zodResolver(workPageLifeCycleSchema),
		defaultValues: {
			imageUrl: response?.imageUrl || "",
		},
	});

	const onImageUpload = (url: string) => {
		setImageUrl(url);
		setValue("imageUrl", url);
	};

	const onSubmits = async (data: TworkLifeCycleSectionData) => {
		try {
			await axios.patch(`/api/workpage/lifecycle/${response.id}`, data);
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
