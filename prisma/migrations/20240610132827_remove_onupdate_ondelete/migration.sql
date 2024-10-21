-- DropForeignKey
ALTER TABLE `videomaster` DROP FOREIGN KEY `videomaster_userId_fkey`;

-- AlterTable
ALTER TABLE `photomaster` MODIFY `updateAt` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `videomaster` ADD CONSTRAINT `videomaster_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
