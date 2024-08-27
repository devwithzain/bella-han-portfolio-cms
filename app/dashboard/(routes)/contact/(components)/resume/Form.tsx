"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ResumeUpload } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { TcontactResumeFile, contactResumeSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();

	const {
		handleSubmit,
		setValue,
		formState: { isSubmitting },
	} = useForm<TcontactResumeFile>({
		resolver: zodResolver(contactResumeSchema),
		defaultValues: {
			resume: response?.resume || "",
		},
	});

	const onResumeUpload = (url: string) => {
		setValue("resume", url);
	};

	const onSubmits = async (data: TcontactResumeFile) => {
		try {
			await axios.patch(`/api/contactpage/resume/${response.id}`, data);
			toast.success("Updated");
		} catch (error: any) {
			toast.error("Error updating!");
		} finally {
			router.push("/dashboard/contact");
			router.refresh();
		}
	};

	return (
		<div className="w-full h-screen bg-white pt-10">
			<div className="w-full">
				<form
					onSubmit={handleSubmit(onSubmits)}
					className="w-full flex flex-col gap-4">
					<ResumeUpload onResumeUpload={onResumeUpload} />
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
