-- DropForeignKey
ALTER TABLE `location` DROP FOREIGN KEY `location_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `review_userId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `review_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `category_referTo_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `fname`,
    DROP COLUMN `lname`,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `stores`;

-- DropTable
DROP TABLE `location`;

-- DropTable
DROP TABLE `offer`;

-- DropTable
DROP TABLE `review`;

-- DropTable
DROP TABLE `category`;

