/*
  Warnings:

  - A unique constraint covering the columns `[content,contentType]` on the table `gallery` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `photoatteched`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `videoatteched`;

-- CreateIndex
CREATE UNIQUE INDEX `gallery_content_contentType_key` ON `gallery`(`content`, `contentType`);
