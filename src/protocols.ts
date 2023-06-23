

export type ApplicationError = {
    name: string;
    message: string;
  };

export type CardPaymentParams = {
    issuer: string;
    number: number;
    name: string;
    expirationDate: Date;
    cvc: number;
};

export type PaymentParams = {
  value: number;
  cardIssuer: string;
  cardLastDigits: string;
};

