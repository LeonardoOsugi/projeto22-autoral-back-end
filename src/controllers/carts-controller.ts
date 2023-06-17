import { AuthenticatedRequest } from "@/middlewares";
import cartService from "@/services/carts-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";


export async function postCarts(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const user_id = req.userId;
    const {product_id}:{product_id: number} = req.body;
    try{
        const cart = await cartService.postCarts(user_id, product_id);

        res.status(httpStatus.CREATED).send(cart);
    }catch(e){
        next(e);
    }
};

export async function getCarts(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const user_id = req.userId;
    try{
        const cartList = await cartService.getCarts(user_id);
        res.status(httpStatus.OK).send(cartList);
    }catch(e){
        next(e);
    }

};

export async function deleteCarts(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const user_id = req.userId;
    const {id} = req.params;
    try{
        const cart = await cartService.deleteCarts(user_id, +id);
        res.status(httpStatus.OK).send(cart);
    }catch(e){
        next(e);
    }

}