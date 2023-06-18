import { notFoundError } from "@/errors";
import { CardPaymentParams, PaymentParams } from "@/protocols";
import paymentRepository from "@/repositories/payments-repository";
import userRepository from "@/repositories/users-repositories";
import { payments } from "@prisma/client";

async function postPayments(user_id: number, value: number, cardData: CardPaymentParams): Promise<payments>{
    const userExist = await userRepository.findById(user_id);

    if(!userExist) throw notFoundError();

    const paymentData: PaymentParams = {
        value,
        cardIssuer: cardData.issuer,
        cardLastDigits: cardData.number.toString().slice(-4),
      };

    const payment = await paymentRepository.createPayment(user_id, paymentData);

    return payment;
}


const paymentsService = {
    postPayments
}

export default paymentsService;