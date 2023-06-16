import { prisma } from '@/config';

export async function productsEmpty(){
    return prisma.products.deleteMany({});
}