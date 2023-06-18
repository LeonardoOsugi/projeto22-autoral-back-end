import { AuthenticatedRequest } from "@/middlewares";
import { CardPaymentParams } from "@/protocols";
import paymentsService from "@/services/payments-service";
import { NextFunction, Response } from "express";
import httpStatus from "http-status";



export async function postPayments(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const user_id = req.userId;
    const {value , cardData}:{value: number, cardData: CardPaymentParams} = req.body;
    try{
        const payment = await paymentsService.postPayments(user_id, value, cardData)
        res.status(httpStatus.CREATED).send(payment);
    }catch(e){
        next(e);
    }
}