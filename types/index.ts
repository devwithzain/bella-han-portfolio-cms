import { z } from "zod";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export const productSchema = z.object({
   title: z.string(),
   description: z.string(),
   imageUrl: z.string().optional(),
   videoUrl: z.string().optional(),
});

export const heroSchema = z.object({
   title: z.string(),
   description: z.string(),
   imageUrl: z.string().optional(),
});

export const servicePageSchema = z.object({
   title: z.string(),
   listOne: z.string().optional(),
   listTwo: z.string().optional(),
   description: z.string(),
});

export type THeadingProps = {
   title: string;
   subtitle?: string;
   center?: boolean;
};

export type TButtonProps = {
   label: string;
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   outline?: boolean;
   small?: boolean;
   icon?: IconType;
};

export type TModalProps = {
   onSubmit: () => void;
   title?: string;
   body?: React.ReactElement;
   footer?: React.ReactElement;
   actionLabel: string;
   disabled?: boolean;
   secondaryAction?: () => void;
   secondaryActionLabel?: string;
};

export type TInputProps = {
   id: string;
   label: string;
   type?: string;
   disabled?: boolean;
   formatPrice?: boolean;
   required?: boolean;
   register: UseFormRegister<FieldValues>,
   errors: FieldErrors;
};

export type ThooksProps = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
};

export type TheroData = z.infer<typeof heroSchema>;
export type TproductData = z.infer<typeof productSchema>;
export type TservicePageData = z.infer<typeof servicePageSchema>;

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};
export type TperspectiveTextProps = {
   children: React.ReactNode;
};

export type TMenuItemProps = {
   onClick: () => void;
   label: string;
   icon?: IconType | any;
};

export type TUserMenuProps = {
   currentUser?: User | null;
};

export type TAvatarProps = {
   src: string | null | undefined;
};

export type TNavbarProps = {
   currentUser?: User | null;
};

export type TimageUploadProps = {
   onImageUpload: (url: string) => void;
};