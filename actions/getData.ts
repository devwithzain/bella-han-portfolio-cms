import prisma from "@/db/prisma";

export const getWorkSectionData = async () => {
   const data = await prisma?.workHeroSection.findMany();
   return data;
};

export const getResearchSectionData = async () => {
   const data = await prisma?.workResearchSection.findMany();
   return data;
};

export const getDangerSectionData = async () => {
   const data = await prisma?.workDangerSection.findMany();
   return data;
};

export const getImpactSectionData = async () => {
   const data = await prisma?.workImpactSection.findMany();
   return data;
};

export const getSolutionSectionData = async () => {
   const data = await prisma?.workSolutionSection.findMany();
   return data;
};

export const getMaterialSectionData = async () => {
   const data = await prisma?.workMaterialsSection.findMany();
   return data;
};

export const getLifeCycleSectionData = async () => {
   const data = await prisma?.workLifeCycleSection.findMany();
   return data;
};

export const getModalSectionData = async () => {
   const data = await prisma?.workModalSection.findMany();
   return data;
};

export const getRenderSectionData = async () => {
   const data = await prisma?.workRenderSection.findMany();
   return data;
};

export const getAboutSectionData = async () => {
   const data = await prisma?.homeAboutSection.findMany();
   return data;
};

export const getSkillsSectionData = async () => {
   const data = await prisma?.homeSkillsSection.findMany();
   return data;
};

export const getContactHeroSectionData = async () => {
   const data = await prisma?.contactHeroSection.findMany();
   return data;
};

export const getContactFormSectionData = async () => {
   const data = await prisma?.contactFormSection.findMany();
   return data;
};
