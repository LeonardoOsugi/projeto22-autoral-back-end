import { prisma } from "@/config"
import { products } from "@prisma/client";


async function findProducts(): Promise<products[]>{
    return prisma.products.findMany();
}

export default {
    findProducts
}