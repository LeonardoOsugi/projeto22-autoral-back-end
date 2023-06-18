import { prisma } from "@/config";
import { PaymentParams } from "@/protocols";
import { payments } from "@prisma/client";



async function createPayment(user_id: number, paymentData: PaymentParams): Promise<payments>{
    return prisma.payments.create({
        data:{
            user_id,
            value: paymentData.value,
            card_issuer: paymentData.cardIssuer,
            card_last_digits: paymentData.cardLastDigits,
        },
    });
}

const paymentRepository = {
    createPayment
}

export default paymentRepository