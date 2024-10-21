-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `stores` DROP FOREIGN KEY `stores_locationId_fkey`;

-- DropIndex
DROP INDEX `selectMaster_key_key` ON `selectMaster`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `createAt`,
    DROP COLUMN `roleId`,
    DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `locationId`,
    DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `location` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `offer` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `selectMaster` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `key`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `Key` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `optionMaster` DROP COLUMN `createAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `updateAt`;

-- CreateIndex
CREATE INDEX `stores_owner_fkey` ON `stores`(`owner` ASC);

-- CreateIndex
CREATE INDEX `location_storeId_fkey` ON `location`(`storeId` ASC);

-- CreateIndex
CREATE INDEX `review_userId_fkey` ON `review`(`userId` ASC);

-- CreateIndex
CREATE INDEX `category_referTo_fkey` ON `category`(`referTo` ASC);

-- CreateIndex
CREATE UNIQUE INDEX `selectMaster_Key_key` ON `selectMaster`(`Key` ASC);

-- CreateIndex
CREATE INDEX `optionMaster_selectId_fkey` ON `optionMaster`(`selectId` ASC);

-- AddForeignKey
ALTER TABLE `location` ADD CONSTRAINT `location_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

