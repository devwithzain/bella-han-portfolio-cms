import { z } from "zod";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

// home page zod schema

export const homePageAboutSchema = z.object({
   title: z.string(),
   paragraph1: z.string(),
   paragraph2: z.string(),
   paragraph3: z.string(),
   paragraph4: z.string(),
   imageUrl: z.string().optional(),
});

export const homePageSkillsSchema = z.object({
   title: z.string(),
   heading1: z.string(),
   heading2: z.string(),
   heading3: z.string(),
   heading4: z.string(),
   heading5: z.string(),
   skillNo1: z.string(),
   skillNo2: z.string(),
   skillNo3: z.string(),
   skillNo4: z.string(),
   skillNo5: z.string(),
   images: z.array(z.string()).optional(),
});

export const workPageHeroSchema = z.object({
   title: z.string(),
   description: z.string(),
   imageUrl: z.string().optional(),
});

export const workPageResearchSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
   images: z.array(z.string()).optional(),
});

export const workPageDangerSchema = z.object({
   title1: z.string(),
   title2: z.string(),
   title3: z.string(),
   title4: z.string(),
   paragraph1: z.string(),
   paragraph2: z.string(),
   paragraph3: z.string(),
   paragraph4: z.string(),
   paragraph5: z.string(),
   paragraph6: z.string(),
   images: z.array(z.string()).optional(),
});

export const workPageImpactSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
   images: z.array(z.string()).optional(),
});

export const workSolutionImpactSchema = z.object({
   title: z.string(),
   heading: z.string(),
   paragraph: z.string(),
   subTitle: z.string(),
   images: z.array(z.string()).optional(),
});

export const workPageLifeCycleSchema = z.object({
   imageUrl: z.string().optional(),
});

export const workPageMaterialSchema = z.object({
   title: z.string(),
   heading: z.string(),
   imageUrl: z.string().optional(),
   images: z.array(z.string()).optional(),
});


export const workModalSchema = z.object({
   title: z.string(),
   images: z.array(z.string()).optional(),
});

export const workRenderSchema = z.object({
   title: z.string(),
   paragraph: z.string(),
   imageUrl: z.string().optional(),
});


export type TpageAboutSectionData = z.infer<typeof homePageAboutSchema>;
export type TpageSkillSectionData = z.infer<typeof homePageSkillsSchema>;

export type TworkModalSectionData = z.infer<typeof workModalSchema>;
export type TworkRenderSectionData = z.infer<typeof workRenderSchema>;
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