"use client";
import {
	CldUploadWidget,
	CloudinaryUploadWidgetInfo,
	CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { TresumeUploadProps } from "@/types";

declare global {
	var cloudinary: any;
}

export default function ResumeUpload({ onResumeUpload }: TresumeUploadProps) {
	const [resumeUrl, setResumeUrl] = useState<string>();

	const handleResumeChange = (result: CloudinaryUploadWidgetResults) => {
		if (typeof result === "object" && "info" in result) {
			const info = result.info as CloudinaryUploadWidgetInfo;
			setResumeUrl(info.secure_url);
			onResumeUpload(info.secure_url);
		}
	};

	return (
		<>
			<CldUploadWidget
				onSuccess={handleResumeChange}
				uploadPreset="jdz0tunu"
				options={{
					maxFiles: 1,
					resourceType: "auto",
				}}>
				{({ open }) => {
					return (
						<div
							onClick={() => open?.()}
							className="w-full flex gap-2 items-center px-4 py-2 border-2 rounded-md cursor-pointer">
							<FaFilePdf size={50} />
							<button className="font-semibold text-lg font-Poppins">
								upload your resume
							</button>
						</div>
					);
				}}
			</CldUploadWidget>
		</>
	);
}
