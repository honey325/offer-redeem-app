-- AlterTable
ALTER TABLE `stores` DROP COLUMN `location`,
    ADD COLUMN `locationId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `User_roleId_fkey` ON `User`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `stores_locationId_fkey` ON `stores`(`locationId` ASC);

-- CreateIndex
CREATE INDEX `stores_owner_fkey` ON `stores`(`owner` ASC);

-- CreateIndex
CREATE INDEX `review_userId_fkey` ON `review`(`userId` ASC);

-- CreateIndex
CREATE INDEX `category_referTo_fkey` ON `category`(`referTo` ASC);

-- CreateIndex
CREATE INDEX `optionMaster_selectId_fkey` ON `optionMaster`(`selectId` ASC);

-- AddForeignKey
ALTER TABLE `stores` ADD CONSTRAINT `stores_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

