"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ResumeUpload } from "@/components";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TcontactResumeFile, contactResumeSchema } from "@/types";

export default function AddContent() {
	const router = useRouter();
	const {
		setValue,
		reset,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TcontactResumeFile>({
		resolver: zodResolver(contactResumeSchema),
	});

	const onResumeUpload = (url: string) => {
		setValue("resume", url);
	};

	const onSubmits = async (data: TcontactResumeFile) => {
		try {
			await axios.post("/api/contactpage/resume", data);
			toast.success("Resume uploaded successfully!");
		} catch (error: any) {
			toast.error("Error: " + error.message);
		} finally {
			reset();
			router.push("/dashboard/contact");
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
					<ResumeUpload onResumeUpload={onResumeUpload} />
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
