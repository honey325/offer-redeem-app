-- DropForeignKey
ALTER TABLE `storeOffer` DROP FOREIGN KEY `storeOffer_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `storeOffer` DROP FOREIGN KEY `storeOffer_offerId_fkey`;

-- AlterTable
ALTER TABLE `offer` ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `storeId` INTEGER NOT NULL,
    ADD COLUMN `tNc` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `storeOffer`;

-- CreateIndex
CREATE INDEX `User_roleId_fkey` ON `User`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `stores_owner_fkey` ON `stores`(`owner` ASC);

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

-- CreateIndex
CREATE INDEX `gallary_contentType_fkey` ON `gallary`(`contentType` ASC);

-- CreateIndex
CREATE INDEX `gallary_storeId_fkey` ON `gallary`(`storeId` ASC);

-- CreateIndex
CREATE INDEX `videoatteched` ON `gallary`(`content` ASC);

