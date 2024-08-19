import { z } from "zod";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export const workPageHeroSchema = z.object({
   title: z.string(),
   description: z.string(),
   imageUrl: z.string().optional(),
});

export const workPageDangerSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
});

export const workPageImpactSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
});

export const workSolutionImpactSchema = z.object({
   title: z.string(),
   heading: z.string(),
   paragraph: z.string(),
   subTitle: z.string(),
   imageUrl: z.string().optional(),
});

export const workPageMaterialSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
});

export const workPageResearchSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
});

export const workPageLifeCycleSchema = z.object({
   imageUrl: z.string().optional(),
});


export type TworkHeroSectionData = z.infer<typeof workPageHeroSchema>;
export type TworkDangerSectionData = z.infer<typeof workPageDangerSchema>;
export type TworkImpactSectionData = z.infer<typeof workPageImpactSchema>;
export type TworkMaterialSectionData = z.infer<typeof workPageMaterialSchema>;
export type TworkResearchSectionData = z.infer<typeof workPageResearchSchema>;
export type TworkSolutionSectionData = z.infer<typeof workSolutionImpactSchema>;
export type TworkLifeCycleSectionData = z.infer<typeof workPageLifeCycleSchema>;

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