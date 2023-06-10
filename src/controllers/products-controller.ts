import productService from "@/services/products-service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";



export async function getProducts(req: Request, res: Response, next: NextFunction){
    try{
        const productsList = await productService.getProducts();

        res.status(httpStatus.OK).send(productsList);
    }catch(e){
        next(e)
    }
}

export async function getProductsId(req: Request, res: Response, next: NextFunction){
    const {id} = req.params;
    try{
        const product = await productService.getProductsId(+id);

        res.status(httpStatus.OK).send(product);
    }catch(e){
        next(e);
    }
}