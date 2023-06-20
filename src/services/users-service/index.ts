import { users } from "@prisma/client";
import bcrypt from 'bcrypt';
import { duplicatedEmailError, invalidCredentialsError } from "./errors";
import userRepository from "@/repositories/users-repositories";
import jwt from "jsonwebtoken";


async function createUser({name, email, password, category}:CreateUserParams): Promise<users>{
    validateUniqueEmailOrFail(email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.create({
        name,
        email,
        password: hashedPassword,
        category
  });
}

async function signIn({ email, password }:SignInParams){
  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  const retorno = {token: token, user_id: user.id}

  return retorno;
}

async function validateUniqueEmailOrFail(email: string) {
    const userWithSameEmail = await userRepository.findByEmail(email);
    if (userWithSameEmail) {
      throw duplicatedEmailError();
    }
}

async function getUserOrFail(email: string): Promise<users> {
  const user = await userRepository.findByEmail(email);
  if (!user) throw invalidCredentialsError();
  return user;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}


export type CreateUserParams = Pick<users, 'name' | 'email' | 'password' |'category'>;

export type SignInParams = Pick<users, 'email' | 'password'>;

const userService = {
    createUser,
    signIn
}

export default userService