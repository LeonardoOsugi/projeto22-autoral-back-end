import { unauthorizedError } from "@/errors";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt from 'jsonwebtoken';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const { authorization } = req.headers;

    if(!authorization) throw unauthorizedError();

    const parts = authorization.split(" ");

    if(parts.length !== 2) throw unauthorizedError();

    const [schema, token] = parts;

    if(schema !== "Bearer") throw unauthorizedError();
    try{
      const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

      req.userId = userId;

      return next();
    }catch(err){
      return generateUnauthorizedResponse(res);
    }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};