
import { CreateUserParams } from "@/services";
import Joi from "joi";


export const createUserSchema = Joi.object<CreateUserParams>({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    category: Joi.string().valid('CLIENT', 'FUNC', 'DEALER').required()
  });