/*
  Warnings:

  - You are about to drop the column `locationId` on the `stores` table. All the data in the column will be lost.
  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `location` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `stores` DROP FOREIGN KEY `stores_locationId_fkey`;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `locationId`,
    ADD COLUMN `location` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `location`;
