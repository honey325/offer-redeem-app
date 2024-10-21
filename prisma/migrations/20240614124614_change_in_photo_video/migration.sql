/*
  Warnings:

  - You are about to drop the column `fileSize` on the `gallery` table. All the data in the column will be lost.
  - You are about to drop the column `originalName` on the `gallery` table. All the data in the column will be lost.
  - Added the required column `fileSize` to the `photomaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `photomaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileSize` to the `videomaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalName` to the `videomaster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `gallery` DROP COLUMN `fileSize`,
    DROP COLUMN `originalName`;

-- AlterTable
ALTER TABLE `photomaster` ADD COLUMN `fileSize` VARCHAR(191) NOT NULL,
    ADD COLUMN `originalName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `videomaster` ADD COLUMN `fileSize` VARCHAR(191) NOT NULL,
    ADD COLUMN `originalName` VARCHAR(191) NOT NULL;
