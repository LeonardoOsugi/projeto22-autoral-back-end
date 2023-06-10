import { prisma } from "@/config"
import { products } from "@prisma/client";


async function findProducts(): Promise<products[]>{
    return prisma.products.findMany();
}

async function findProductsById(id: number){
    return prisma.products.findFirst({where: {id}});
}

export default {
    findProducts,
    findProductsById
}