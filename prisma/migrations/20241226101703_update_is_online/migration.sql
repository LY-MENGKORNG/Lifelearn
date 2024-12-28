/*
  Warnings:

  - You are about to alter the column `isOnline` on the `user` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `isOnline` BOOLEAN NOT NULL DEFAULT false;
