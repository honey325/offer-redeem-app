/*
  Warnings:

  - You are about to drop the column `Key` on the `optionMaster` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `optionMaster` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activationCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `optionMaster` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `optionMaster_Key_key` ON `optionMaster`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `activationCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `password` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `offer` ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `optionMaster` DROP COLUMN `Key`,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `key` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `review` ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `content` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `selectMaster` ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `stores` ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `photomaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `videomaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gallary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storeId` INTEGER NOT NULL,
    `contentType` INTEGER NOT NULL,
    `content` INTEGER NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `optionMaster_key` ON `optionMaster`(`key`);

-- AddForeignKey
ALTER TABLE `photomaster` ADD CONSTRAINT `photomaster_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `videomaster` ADD CONSTRAINT `videomaster_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `gallary_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `gallary_contentType_fkey` FOREIGN KEY (`contentType`) REFERENCES `optionMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `photoatteched` FOREIGN KEY (`content`) REFERENCES `photomaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `videoatteched` FOREIGN KEY (`content`) REFERENCES `videomaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
