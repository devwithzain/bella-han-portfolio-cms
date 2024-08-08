import prisma from "@/db/prisma";

export const getData = async () => {
   const data = await prisma?.service.findMany();
   return data;
};

export const getProcess = async () => {
   const data = await prisma?.process.findMany();
   return data;
};

export const getServices = async () => {
   const data = await prisma?.servicePage.findMany();
   return data;
};
