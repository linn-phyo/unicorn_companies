-- CreateTable
CREATE TABLE `unicorn_companies` (
    `id` VARCHAR(36) NOT NULL,
    `company` VARCHAR(191) NULL DEFAULT 'Unknown',
    `valuation` VARCHAR(10) NULL,
    `date_joined` DATETIME(3) NULL,
    `industry` VARCHAR(125) NULL,
    `city` VARCHAR(50) NULL,
    `country` VARCHAR(50) NULL,
    `continent` VARCHAR(100) NULL,
    `year_founded` INTEGER NOT NULL DEFAULT 0,
    `funding` VARCHAR(10) NULL,
    `select_investors` VARCHAR(225) NULL,

    UNIQUE INDEX `unicorn_companies_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
