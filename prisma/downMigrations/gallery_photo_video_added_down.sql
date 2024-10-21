-- DropForeignKey
ALTER TABLE `photomaster` DROP FOREIGN KEY `photomaster_userId_fkey`;

-- DropForeignKey
ALTER TABLE `videomaster` DROP FOREIGN KEY `videomaster_userId_fkey`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `gallary_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `gallary_contentType_fkey`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `photoatteched`;

-- DropForeignKey
ALTER TABLE `gallary` DROP FOREIGN KEY `videoatteched`;

-- DropIndex
DROP INDEX `optionMaster_key_key` ON `optionMaster`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `activationCode`,
    DROP COLUMN `contact`,
    DROP COLUMN `isActive`,
    DROP COLUMN `isDelete`,
    MODIFY `password` varchar(191) NOT NULL;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `offer` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `isDelete`,
    MODIFY `content` varchar(100) NOT NULL;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `selectMaster` DROP COLUMN `isDelete`;

-- AlterTable
ALTER TABLE `optionMaster` DROP COLUMN `isDelete`,
    DROP COLUMN `key`,
    ADD COLUMN `Key` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `photomaster`;

-- DropTable
DROP TABLE `videomaster`;

-- DropTable
DROP TABLE `gallary`;

-- CreateIndex
CREATE INDEX `User_roleId_fkey` ON `User`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `stores_owner_fkey` ON `stores`(`owner` ASC);

-- CreateIndex
CREATE INDEX `review_userId_fkey` ON `review`(`userId` ASC);

-- CreateIndex
CREATE INDEX `category_referTo_fkey` ON `category`(`referTo` ASC);

-- CreateIndex
CREATE UNIQUE INDEX `optionMaster_Key_key` ON `optionMaster`(`Key` ASC);

-- CreateIndex
CREATE INDEX `optionMaster_selectId_fkey` ON `optionMaster`(`selectId` ASC);

