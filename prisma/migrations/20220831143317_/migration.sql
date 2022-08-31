-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ChatGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "adminUsers" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ChatSingle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MessageGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatGroupId" INTEGER,
    "text" TEXT NOT NULL,
    "seenBy" TEXT NOT NULL,
    "sentTo" TEXT NOT NULL,
    CONSTRAINT "MessageGroup_chatGroupId_fkey" FOREIGN KEY ("chatGroupId") REFERENCES "ChatGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MessageSingle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatSingleId" INTEGER,
    "text" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL,
    "sent" BOOLEAN NOT NULL,
    CONSTRAINT "MessageSingle_chatSingleId_fkey" FOREIGN KEY ("chatSingleId") REFERENCES "ChatSingle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ChatGroupToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ChatGroupToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatGroup" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ChatGroupToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ChatSingleToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ChatSingleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatSingle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ChatSingleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatGroupToUser_AB_unique" ON "_ChatGroupToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatGroupToUser_B_index" ON "_ChatGroupToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatSingleToUser_AB_unique" ON "_ChatSingleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatSingleToUser_B_index" ON "_ChatSingleToUser"("B");
