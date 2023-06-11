import { createUser, loginUser } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createUserSchema, signInSchema } from "@/schemas";
import { Router } from "express";

const usersRouter = Router();

usersRouter
.post('/sign-up',validateBody(createUserSchema), createUser )
.post('/sign-in', validateBody(signInSchema), loginUser)

export {usersRouter}