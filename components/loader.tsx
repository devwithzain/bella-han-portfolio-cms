"use client";
import { PuffLoader } from "react-spinners";

export default function Loader() {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<PuffLoader
				size={100}
				color="#BBB0D2"
			/>
		</div>
	);
}
