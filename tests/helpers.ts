import { users } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { createUser } from './factories';
import { prisma } from '@/config';

export async function cleanDb() {
    await prisma.products.deleteMany({});
    await prisma.payments.deleteMany({});
    await prisma.carts.deleteMany({});
    await prisma.states.deleteMany({});
    await prisma.cities.deleteMany({});
    await prisma.addresses.deleteMany({});
    await prisma.users.deleteMany({});
}

export async function generateValidToken(user?: users) {
    const incomingUser = user || (await createUser());
    const token = jwt.sign({ userId: incomingUser.id }, process.env.JWT_SECRET);

    return token;
}