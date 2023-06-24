import { prisma } from '@/config';

export async function productsEmpty(){
    return prisma.products.deleteMany({});
}

export async function productsCreate(){
    const products = [
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

    return prisma.products.createMany({
            data: products
    });
}