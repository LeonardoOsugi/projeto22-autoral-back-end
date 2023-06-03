import { PrismaClient, UserCategory } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main(){
    let product = await prisma.products.findFirst();
    let products = [
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAEh",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        },
        {
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfo3mUt9yBng8_RNzjPEjzqBHDuU9hH2-IaR9d26FxrcpBNIryIGl8bEea13dHxYhyN4FN6N4xNah_lUhFqxYCEoX25AWIZh4Go8ZxUCY2pdSVigJyV3CsjFu5&usqp=CAE",
            name: "Batman Arkham City",
            price: 8190,
            slot: 20
        }
    ];

    if(!product){
       await prisma.products.createMany({
            data: products
        });
    };

    let user = await prisma.users.findFirst();
    let users = [
        {
            name: "Leo Func",
            email: "leofunc@gmail.com",
            password: bcrypt.hashSync('123456', 12),
            category: UserCategory.FUNC
        },
        {
            name: "Amanda Func",
            email: "amandafunc@gmail.com",
            password: bcrypt.hashSync('123456', 12),
            category: UserCategory.FUNC
        },
        {
            name: "Priscila Func",
            email: "priscilafunc@gmail.com",
            password: bcrypt.hashSync('123456', 12),
            category: UserCategory.FUNC
        },
        {
            name: "Raphael Func",
            email: "raphfunc@gmail.com",
            password: bcrypt.hashSync('123456', 12),
            category: UserCategory.FUNC
        },
        {
            name: "April Func",
            email: "aprilfunc@gmail.com",
            password: bcrypt.hashSync('123456', 12),
            category: UserCategory.FUNC
        }
    ];

    if(!user){
        await prisma.users.createMany({
            data: users
        });
    };
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });