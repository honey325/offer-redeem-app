-- DropForeignKey
ALTER TABLE `stores` DROP FOREIGN KEY `stores_owner_fkey`;

-- DropForeignKey
ALTER TABLE `optionMaster` DROP FOREIGN KEY `optionMaster_selectId_fkey`;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `owner`;

-- AlterTable
ALTER TABLE `offer` DROP COLUMN `code`,
    DROP COLUMN `storeId`;

-- DropTable
DROP TABLE `selectMaster`;

-- DropTable
DROP TABLE `optionMaster`;

-- CreateIndex
CREATE INDEX `location_storeId_fkey` ON `location`(`storeId` ASC);

-- CreateIndex
CREATE INDEX `review_userId_fkey` ON `review`(`userId` ASC);

-- CreateIndex
CREATE INDEX `category_referTo_fkey` ON `category`(`referTo` ASC);

