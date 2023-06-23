import { prisma } from "@/config"
import { carts, products } from "@prisma/client";



async function createCart(user_id: number, product_id: number): Promise<carts>{
    return prisma.carts.create({
        data: {
            user_id,
            product_id
        }});
}

async function findManyCarts(user_id: number):Promise<(carts & {
    products: products;
})[]>{
    return prisma.carts.findMany({
        where:{user_id},
        include:{
            products: true
        }
    });
}

async function findFirstCartsById(id: number): Promise<carts>
{
    return prisma.carts.findFirst({where:{id}});
}

async function deleteCarts(id: number){
    return prisma.carts.delete({where: {id}})
}

async function deleteByUserId(user_id: number){
    return prisma.carts.deleteMany({where:{user_id}});
}

const cartRepository =  {
    createCart,
    findManyCarts,
    findFirstCartsById,
    deleteCarts,
    deleteByUserId
}

export default cartRepository;