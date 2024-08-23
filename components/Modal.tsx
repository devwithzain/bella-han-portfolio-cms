"use client";
import Button from "./Button";
import { useCallback } from "react";
import { TModalProps } from "@/types";

export default function Modal({
	onSubmit,
	body,
	actionLabel,
	footer,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}: TModalProps) {
	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}

		onSubmit();
	}, [onSubmit, disabled]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}

		secondaryAction();
	}, [secondaryAction, disabled]);

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-lg bg-[#BBB0D2] bg-cover bg-center bg-no-repeat w-full h-full">
				<div className="relative w-[30%] my-6 mx-auto">
					<div className="translate duration-300 shadow-2xl rounded-lg">
						<div className="translate lg:h-auto md:h-auto border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							<div className="relative p-6 flex-auto font-Poppins">{body}</div>
							<div className="flex flex-col gap-2 p-6">
								<div className="flex flex-row items-center gap-4 w-full">
									{secondaryAction && secondaryActionLabel && (
										<Button
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
											outline
										/>
									)}
									<Button
										disabled={disabled}
										label={`${disabled ? "Loading..." : actionLabel}`}
										onClick={handleSubmit}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
