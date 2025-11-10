-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "avatar" TEXT NOT NULL DEFAULT '/img/team-1.jpg',
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" TEXT,
    "verificationExpiry" TIMESTAMP(3),
    "resetToken" TEXT,
    "resetTokenExpiry" TIMESTAMP(3),
    "failedLoginAttempts" INTEGER NOT NULL DEFAULT 0,
    "accountLockedUntil" TIMESTAMP(3),
    "lastLoginAt" TIMESTAMP(3),
    "lastLoginIp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "logo" TEXT NOT NULL DEFAULT '/img/logo/default-business-logo.png',
    "image" TEXT NOT NULL,
    "bannerImage" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "statusText" TEXT NOT NULL DEFAULT 'Unclaimed',
    "city" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "locationConfirmation" TEXT,
    "locationVerified" BOOLEAN NOT NULL DEFAULT false,
    "locationDetection" TEXT,
    "call" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT,
    "rating" TEXT NOT NULL DEFAULT 'mid',
    "ratingRate" TEXT NOT NULL DEFAULT '0.0',
    "review" TEXT NOT NULL DEFAULT '(0 Reviews)',
    "categories" JSONB NOT NULL,
    "fullDescription" JSONB NOT NULL,
    "locations" JSONB NOT NULL,
    "contentSectionTitle" TEXT,
    "contentBlocks" JSONB,
    "reviews" JSONB,
    "workingHours" JSONB,
    "tags" JSONB,
    "socials" JSONB,
    "seo" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_verificationToken_key" ON "User"("verificationToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_resetToken_key" ON "User"("resetToken");

-- CreateIndex
CREATE UNIQUE INDEX "Listing_slug_key" ON "Listing"("slug");

-- CreateIndex
CREATE INDEX "Listing_userId_idx" ON "Listing"("userId");

-- CreateIndex
CREATE INDEX "Listing_approved_idx" ON "Listing"("approved");

-- CreateIndex
CREATE INDEX "Listing_city_idx" ON "Listing"("city");

-- CreateIndex
CREATE INDEX "Listing_subCategory_idx" ON "Listing"("subCategory");

-- CreateIndex
CREATE INDEX "Listing_slug_idx" ON "Listing"("slug");

-- CreateIndex
CREATE INDEX "Listing_isGlobal_idx" ON "Listing"("isGlobal");

-- CreateIndex
CREATE INDEX "Listing_locationVerified_idx" ON "Listing"("locationVerified");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
