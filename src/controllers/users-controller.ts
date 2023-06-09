import userService from "@/services/users-service";
import { Request, Response } from "express";
import httpStatus from "http-status";


export async function createUser(req: Request, res: Response){
    const {name, email,  password, category} = req.body;
    try{
        const user = await userService.createUser({name, email, password, category});
        return res.status(httpStatus.CREATED).json({
            id: user.id,
            email: user.email,
          });
    }catch(e){
        if (e.name === 'DuplicatedEmailError') {
            return res.status(httpStatus.CONFLICT).send(e);
          }
        return res.status(httpStatus.BAD_REQUEST).send(e);
    }
}

export async function loginUser(req: Request, res: Response){
    const { email, password } = req.body

  try {
    const result = await userService.signIn({ email, password });

    return res.status(httpStatus.OK).send({token: result});
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}