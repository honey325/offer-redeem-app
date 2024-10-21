# Offer Redeem App

This is an Offer Redeem App inspired by Freedem, built using **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, and **JWT authentication with Passport**. The app allows users to browse, redeem offers from stores, and leave reviews. The app features categories for offers, and users can upload photos or videos to a gallery.

## Features

- **User authentication** using JWT with Passport.js
- **Stores and offers** management
- **Offer redemption** by users
- **User reviews** for stores and offers
- **Categories** for stores and offers
- **Photo and video galleries** for each store
- **Database seeding** for default categories, stores, and offers
- **API documentation** using Swagger

## Entities

1. **User**: Represents users who redeem offers and leave reviews.
2. **Stores**: Represents businesses that offer deals.
3. **Offer**: Represents offers or discounts available at stores.
4. **StoreOffer**: A relationship between stores and their offers.
5. **Review**: Reviews left by users for stores and offers.
6. **Category**: Represents different categories for stores and offers.
7. **SelectMaster**: A set of options for configurable items (e.g., store types, offer types).
8. **OptionMaster**: The options for select items like categories or types.
9. **PhotoMaster**: Stores photo information for galleries.
10. **VideoMaster**: Stores video information for galleries.
11. **Gallery**: A gallery of images and videos for a store.

## Tech Stack

- **Language**: TypeScript
- **Framework**: Node.js, Express.js
- **Database**: Prisma ORM with PostgreSQL (or any other database supported by Prisma)
- **Authentication**: JWT with Passport.js
- **API Documentation**: Swagger (Auto-generated documentation)

## Requirements

- **Node.js** (v16 or later)
- **TypeScript** (Installed globally)
- **PostgreSQL** (or any other database supported by Prisma)

## Getting Started

```bash
1. Clone the repository
git clone https://github.com/honey325/offer-redeem-app.git
cd offer-redeem-app

2. Install dependencies
npm install

3. Set up environment variables
Create a .env file in the root directory and add the following configuration:

4. Prisma Setup
Generate Prisma client:
npx prisma generate

5. Run Prisma migrations
This command will create the tables based on the Prisma schema:
npx prisma migrate dev --name init

6. Seed the database

To seed default categories, stores, and offers, run the following command:
npx prisma db seed

7. Run the application
npm run dev
