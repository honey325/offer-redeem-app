/*
  Warnings:

  - Added the required column `code` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storeId` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `offer` ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `stores` ADD COLUMN `owner` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `selectMaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `selectMaster_Key_key`(`Key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `optionMaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `selectId` INTEGER NOT NULL,

    UNIQUE INDEX `optionMaster_Key_key`(`Key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stores` ADD CONSTRAINT `stores_owner_fkey` FOREIGN KEY (`owner`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `optionMaster` ADD CONSTRAINT `optionMaster_selectId_fkey` FOREIGN KEY (`selectId`) REFERENCES `selectMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
