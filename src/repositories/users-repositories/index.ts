import { prisma } from "@/config";
import { CreateUserParams } from "@/services";
import { users } from "@prisma/client";


async function findByEmail(email: string): Promise<users> {
    const params = {
      where: {
        email,
      },
    };
  
    return prisma.users.findUnique(params);
}

async function create({name,email,password,category}:CreateUserParams): Promise<users>{
    return prisma.users.create({
        data: {
            name,
            email,
            password,
            category
        }
    });
}

  const userRepository = {
    findByEmail,
    create
  };
  
  export default userRepository;