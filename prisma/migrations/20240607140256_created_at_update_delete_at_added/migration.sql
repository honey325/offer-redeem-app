/*
  Warnings:

  - You are about to drop the column `storeId` on the `location` table. All the data in the column will be lost.
  - You are about to drop the column `Key` on the `selectMaster` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key]` on the table `selectMaster` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `optionMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key` to the `selectMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `selectMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `location` DROP FOREIGN KEY `location_storeId_fkey`;

-- DropIndex
DROP INDEX `selectMaster_Key_key` ON `selectMaster`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `location` DROP COLUMN `storeId`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `offer` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `optionMaster` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `review` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `selectMaster` DROP COLUMN `Key`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `key` VARCHAR(191) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `stores` ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `locationId` INTEGER NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `selectMaster_key_key` ON `selectMaster`(`key`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `optionMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stores` ADD CONSTRAINT `stores_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
