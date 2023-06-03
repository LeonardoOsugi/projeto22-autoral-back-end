import { notFoundError } from "@/errors";
import productsRepositories from "@/repositories/products-repositories";
import { products } from "@prisma/client";

async function getProducts(): Promise<products[]>{
    const products: products[] = await productsRepositories.findProducts();

    if(!products) throw notFoundError();

    return products;
}

const productService = {
    getProducts
}

export default productService;