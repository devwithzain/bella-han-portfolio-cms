"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TcontactFormSectionData, contactFormSchema } from "@/types";

export default function Form({ response }: any) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TcontactFormSectionData>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			title: response?.title || "",
			paragraph: response?.paragraph || "",
		},
	});

	const onSubmits = async (data: TcontactFormSectionData) => {
		try {
			await axios.patch(`/api/contactpage/form/${response.id}`, data);
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
