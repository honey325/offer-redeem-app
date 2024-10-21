/*
  Warnings:

  - You are about to drop the `gallary` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `gallary_contentType_fkey`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `gallary_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `photoatteched`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `videoatteched`;

-- AlterTable
ALTER TABLE `storeOffer` MODIFY `startDate` DATETIME(3) NULL,
    MODIFY `endDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `stores` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `gallary`;

-- CreateTable
CREATE TABLE `gallery` (
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

-- AddForeignKey
ALTER TABLE `stores` ADD CONSTRAINT `stores_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `gallery_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `gallery_contentType_fkey` FOREIGN KEY (`contentType`) REFERENCES `optionMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `photoatteched` FOREIGN KEY (`content`) REFERENCES `photomaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery` ADD CONSTRAINT `videoatteched` FOREIGN KEY (`content`) REFERENCES `videomaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
