/*
  Warnings:

  - Added the required column `customDate` to the `Mood` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mood" ADD COLUMN     "customDate" TIMESTAMP(3) NOT NULL;
