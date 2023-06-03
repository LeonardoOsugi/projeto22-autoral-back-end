-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('INPROGRESS', 'PAID', 'NOTPAID');

-- CreateEnum
CREATE TYPE "UserCategory" AS ENUM ('CLIENT', 'FUNC', 'DEALER');

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "city_id" INTEGER NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" VARCHAR(4) NOT NULL,
    "complement" VARCHAR(50) NOT NULL,
    "postal_code" VARCHAR(11) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "state_id" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "card_issuer" TEXT NOT NULL,
    "card_last_digits" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'INPROGRESS',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "category" "UserCategory" NOT NULL DEFAULT 'CLIENT',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
