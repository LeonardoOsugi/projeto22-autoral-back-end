import { faker } from '@faker-js/faker';
import httpStatus from 'http-status';
import supertest from 'supertest';
import { productsCreate, productsEmpty } from '../factories';
import { cleanDb } from '../helpers';
import { duplicatedEmailError } from '@/services/users-service/errors';
import { prisma } from '@/config';
import app, { init } from '@/app';



beforeAll(async() =>{
    await init();
    await cleanDb();
});

const server = supertest(app);

describe('GET /products', () => {
    it('should respond with status 200 if products exist', async() => {
        const response = await server.get('/products');
        expect(response.status).toBe(httpStatus.OK);
    });
});

// describe('GET /products/:id', () => {
//     it('should respond with status 200 if productsId exist', async() => {
        
//         const response2 = await productsCreate();
//         console.log(response2)
//         const response = await server.get('/products/1');
//         console.log(response);
//         expect(response.status).toEqual(httpStatus.OK);
//     });
// });
