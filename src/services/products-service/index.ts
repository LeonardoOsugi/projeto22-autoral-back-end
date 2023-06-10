import { notFoundError } from "@/errors";
import productsRepositories from "@/repositories/products-repositories";
import { products } from "@prisma/client";

async function getProducts(): Promise<products[]>{
    const products: products[] = await productsRepositories.findProducts();

    if(!products) throw notFoundError();

    return products;
}

async function getProductsId(id: number){
    const product = await productsRepositories.findProductsById(id);

    if(!product) throw notFoundError();

    return product;
}

const productService = {
    getProducts,
    getProductsId
}

export default productService;