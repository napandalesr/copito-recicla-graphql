-- CreateEnum
CREATE TYPE "CATEGORY" AS ENUM ('JAC', 'CE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "CATEGORY" NOT NULL,
    "email" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "acopio" BOOLEAN DEFAULT false,
    "acopioName" TEXT,
    "prae" BOOLEAN DEFAULT false,
    "praeName" TEXT,
    "proceda" BOOLEAN DEFAULT false,
    "procedaProject" TEXT,
    "committee" BOOLEAN DEFAULT false,
    "attachment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reciclyng" (
    "id" SERIAL NOT NULL,
    "weight" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reciclyng_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entity_email_key" ON "Entity"("email");

-- AddForeignKey
ALTER TABLE "Reciclyng" ADD CONSTRAINT "Reciclyng_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
