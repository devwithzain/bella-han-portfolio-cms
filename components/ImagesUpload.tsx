"use client";
import {
	CldUploadWidget,
	CloudinaryUploadWidgetInfo,
	CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
	var cloudinary: any;
}

export type TimageUploadProps = {
	onImageUploads: (urls: string[]) => void;
};

export default function ImagesUpload({ onImageUploads }: TimageUploadProps) {
	const [mediaUrls, setMediaUrls] = useState<string[]>([]);

	const handleMediaChange = (result: CloudinaryUploadWidgetResults) => {
		if (typeof result === "object" && "info" in result) {
			const info = result.info as CloudinaryUploadWidgetInfo;

			// Ensure you are adding the new image URL to the existing array
			setMediaUrls((prevUrls) => {
				const newMediaUrls = [...prevUrls, info.secure_url];
				onImageUploads(newMediaUrls);
				return newMediaUrls;
			});
		}
	};

	return (
		<>
			<CldUploadWidget
				onSuccess={handleMediaChange}
				uploadPreset="jdz0tunu"
				options={{
					maxFiles: 10,
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
			{mediaUrls.length > 0 && (
				<div className="flex flex-wrap gap-4 mt-4">
					{mediaUrls.map((url, index) => (
						<Image
							key={index}
							src={url}
							alt={`Uploaded ${index + 1}`}
							width={200}
							height={200}
						/>
					))}
				</div>
			)}
		</>
	);
}
