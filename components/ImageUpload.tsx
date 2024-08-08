"use client";
import {
	CldUploadWidget,
	CloudinaryUploadWidgetInfo,
	CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TimageUploadProps } from "@/types";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
	var cloudinary: any;
}

export default function MediaUpload({ onImageUpload }: TimageUploadProps) {
	const [mediaUrl, setMediaUrl] = useState("");
	const [mediaType, setMediaType] = useState("");

	const handleMediaChange = (result: CloudinaryUploadWidgetResults) => {
		if (typeof result === "object" && "info" in result) {
			const info = result.info as CloudinaryUploadWidgetInfo;
			setMediaUrl(info.secure_url);
			setMediaType(info.resource_type);
			onImageUpload(info.secure_url);
		}
	};

	return (
		<>
			<CldUploadWidget
				onSuccess={handleMediaChange}
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
							<TbPhotoPlus size={50} />
							<button className="font-semibold text-lg">Click to upload</button>
						</div>
					);
				}}
			</CldUploadWidget>
			{mediaUrl && (
				<div>
					{mediaType === "image" && (
						<Image
							src={mediaUrl}
							alt="Uploaded"
							width={400}
							height={400}
						/>
					)}
					{mediaType === "video" && (
						<video
							controls
							width="400">
							<source
								src={mediaUrl}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					)}
				</div>
			)}
		</>
	);
}
