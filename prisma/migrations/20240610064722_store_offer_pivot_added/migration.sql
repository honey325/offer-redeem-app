/*
  Warnings:

  - You are about to drop the column `code` on the `offer` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `offer` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `offer` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `offer` table. All the data in the column will be lost.
  - You are about to drop the column `tNc` on the `offer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `offer` DROP COLUMN `code`,
    DROP COLUMN `endDate`,
    DROP COLUMN `startDate`,
    DROP COLUMN `storeId`,
    DROP COLUMN `tNc`;

-- CreateTable
CREATE TABLE `storeOffer` (
    `storeId` INTEGER NOT NULL,
    `offerId` INTEGER NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `tNc` VARCHAR(191) NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`storeId`, `offerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `storeOffer` ADD CONSTRAINT `storeOffer_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storeOffer` ADD CONSTRAINT `storeOffer_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
