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

async function findById(user_id: number): Promise<users>
{
  return prisma.users.findFirst({where:{id: user_id}});
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
    findById,
    create
  };
  
  export default userRepository;