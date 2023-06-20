import { forBiddenError, notFoundError } from "@/errors";
import cartsRepository from "@/repositories/carts-repository";
import productsRepositories from "@/repositories/products-repositories";
import userRepository from "@/repositories/users-repositories";
import { carts, products } from "@prisma/client";



async function postCarts(user_id: number, product_id: number): Promise<carts>{
    userExist(user_id);

    const productExist = await productsRepositories.findProductsById(product_id);

    if(!productExist) throw notFoundError();

    if(productExist.slot === 0) throw forBiddenError();

    const slot = productExist.slot - 1;

    await productsRepositories.updateProductById(product_id, slot);

    const cart = await cartsRepository.createCart(user_id, product_id);

    return cart;
}

async function getCarts(user_id: number): Promise<(carts & {
    products: products;
})[]>{
    userExist(user_id);

    const cartList = await cartsRepository.findManyCarts(user_id);

    return cartList;
}

async function deleteCarts(user_id: number, id: number){
    userExist(user_id);

    const productExitInCarts = await cartsRepository.findFirstCartsById(id);

    if(!productExitInCarts) throw notFoundError();

    const product_id = productExitInCarts.product_id;

    const productExist = await productsRepositories.findProductsById(product_id);

    if(!productExist) throw notFoundError();

    const slot = productExist.slot+1;

    await productsRepositories.updateProductById(product_id, slot);

    return await cartsRepository.deleteCarts(id);
}

async function userExist(user_id: number){
    const userExist = await userRepository.findById(user_id);

    if(!userExist) throw notFoundError();
}

const cartService = {
    postCarts,
    getCarts,
    deleteCarts
}

export default cartService;