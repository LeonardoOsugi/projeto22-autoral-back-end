import bcrypt from 'bcrypt';
import {faker} from '@faker-js/faker';
import { users } from "@prisma/client";
import { prisma } from '@/config';




export async function createUser(params: Partial<users> = {}): Promise<users>
{
    const incomingPassword = params.password || faker.internet.password({ length: 6 });
    const hashedPassword = await bcrypt.hash(incomingPassword, 10);
  
    return prisma.users.create({
      data: {
        name: faker.name.fullName() ,
        email: params.email || faker.internet.email(),
        password: hashedPassword,
      },
    });
  }