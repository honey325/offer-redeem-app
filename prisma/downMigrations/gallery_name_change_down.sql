-- DropForeignKey
ALTER TABLE `stores` DROP FOREIGN KEY `stores_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `gallery_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `gallery_contentType_fkey`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `photoatteched`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `videoatteched`;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `categoryId`;

-- AlterTable
ALTER TABLE `storeOffer` MODIFY `startDate` datetime(3) NOT NULL,
    MODIFY `endDate` datetime(3) NOT NULL;

-- DropTable
DROP TABLE `gallery`;

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

    INDEX `gallary_contentType_fkey`(`contentType` ASC),
    INDEX `gallary_storeId_fkey`(`storeId` ASC),
    INDEX `videoatteched`(`content` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `User_roleId_fkey` ON `User`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `stores_owner_fkey` ON `stores`(`owner` ASC);

-- CreateIndex
CREATE INDEX `storeOffer_offerId_fkey` ON `storeOffer`(`offerId` ASC);

-- CreateIndex
CREATE INDEX `review_userId_fkey` ON `review`(`userId` ASC);

-- CreateIndex
CREATE INDEX `category_referTo_fkey` ON `category`(`referTo` ASC);

-- CreateIndex
CREATE INDEX `optionMaster_selectId_fkey` ON `optionMaster`(`selectId` ASC);

-- CreateIndex
CREATE INDEX `photomaster_userId_fkey` ON `photomaster`(`userId` ASC);

-- CreateIndex
CREATE INDEX `videomaster_userId_fkey` ON `videomaster`(`userId` ASC);

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `gallary_contentType_fkey` FOREIGN KEY (`contentType`) REFERENCES `optionMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `gallary_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `photoatteched` FOREIGN KEY (`content`) REFERENCES `photomaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallary` ADD CONSTRAINT `videoatteched` FOREIGN KEY (`content`) REFERENCES `videomaster`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

