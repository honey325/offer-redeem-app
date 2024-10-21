-- AlterTable
ALTER TABLE `User` DROP COLUMN `salt`;

-- CreateIndex
CREATE INDEX `User_roleId_fkey` ON `User`(`roleId` ASC);

-- CreateIndex
CREATE INDEX `stores_categoryId_fkey` ON `stores`(`categoryId` ASC);

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

-- CreateIndex
CREATE INDEX `gallery_contentType_fkey` ON `gallery`(`contentType` ASC);

-- CreateIndex
CREATE INDEX `gallery_storeId_fkey` ON `gallery`(`storeId` ASC);

