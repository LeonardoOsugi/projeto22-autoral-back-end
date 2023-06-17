import { prisma } from "@/config"
import { carts } from "@prisma/client";



async function createCart(user_id: number, product_id: number): Promise<carts>{
    return prisma.carts.create({
        data: {
            user_id,
            product_id
        }});
}

async function findManyCarts(user_id: number): Promise<carts[]>{
    return prisma.carts.findMany({where:{user_id}});
}

async function findFirstCartsById(id: number): Promise<carts>
{
    return prisma.carts.findFirst({where:{id}});
}

async function deleteCarts(id: number){
    return prisma.carts.delete({where: {id}})
}

const cartRepository =  {
    createCart,
    findManyCarts,
    findFirstCartsById,
    deleteCarts
}

export default cartRepository;