/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `offer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `offer` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `offer_name_key` ON `offer`(`name`);
