-- DropIndex
DROP INDEX `category_name_key` ON `category`;

-- CreateIndex
CREATE INDEX `location_storeId_fkey` ON `location`(`storeId` ASC);

-- CreateIndex
CREATE INDEX `review_userId_fkey` ON `review`(`userId` ASC);

-- CreateIndex
CREATE INDEX `category_referTo_fkey` ON `category`(`referTo` ASC);

