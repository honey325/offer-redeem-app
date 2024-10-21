/*
  Warnings:

  - Added the required column `fileSize` to the `gallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gallery` ADD COLUMN `fileSize` VARCHAR(191) NOT NULL,
    ADD COLUMN `originalName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `storeOffer_endDate_idx` ON `storeOffer`(`endDate`);
