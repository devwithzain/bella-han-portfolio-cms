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
