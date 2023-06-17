import { prisma } from "@/config"
import { products } from "@prisma/client";


async function findProducts(): Promise<products[]>{
    return prisma.products.findMany();
}

async function findProductsById(id: number){
    return prisma.products.findFirst({where: {id}});
}

async function updateProductById(product_id: number, slot: number){
    return prisma.products.update({
        where:{
            id: product_id
        },
        data:{
            slot
        }
    })
}

const productRepository =  {
    findProducts,
    findProductsById,
    updateProductById
}

export default productRepository;