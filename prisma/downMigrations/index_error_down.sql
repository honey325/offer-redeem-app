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

-- RenameIndex
ALTER TABLE `optionMaster` RENAME INDEX `optionMaster_key_key` TO `optionMaster_key`;

