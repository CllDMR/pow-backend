/*
  Warnings:

  - The primary key for the `ChatSingle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MessageSingle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ChatGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MessageGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__ChatGroupToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ChatGroupToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatGroup" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ChatGroupToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__ChatGroupToUser" ("A", "B") SELECT "A", "B" FROM "_ChatGroupToUser";
DROP TABLE "_ChatGroupToUser";
ALTER TABLE "new__ChatGroupToUser" RENAME TO "_ChatGroupToUser";
CREATE UNIQUE INDEX "_ChatGroupToUser_AB_unique" ON "_ChatGroupToUser"("A", "B");
CREATE INDEX "_ChatGroupToUser_B_index" ON "_ChatGroupToUser"("B");
CREATE TABLE "new__ChatSingleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ChatSingleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatSingle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ChatSingleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__ChatSingleToUser" ("A", "B") SELECT "A", "B" FROM "_ChatSingleToUser";
DROP TABLE "_ChatSingleToUser";
ALTER TABLE "new__ChatSingleToUser" RENAME TO "_ChatSingleToUser";
CREATE UNIQUE INDEX "_ChatSingleToUser_AB_unique" ON "_ChatSingleToUser"("A", "B");
CREATE INDEX "_ChatSingleToUser_B_index" ON "_ChatSingleToUser"("B");
CREATE TABLE "new_ChatSingle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ChatSingle" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "ChatSingle";
DROP TABLE "ChatSingle";
ALTER TABLE "new_ChatSingle" RENAME TO "ChatSingle";
CREATE TABLE "new_MessageSingle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatSingleId" TEXT,
    "text" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL,
    "sent" BOOLEAN NOT NULL,
    CONSTRAINT "MessageSingle_chatSingleId_fkey" FOREIGN KEY ("chatSingleId") REFERENCES "ChatSingle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MessageSingle" ("chatSingleId", "createdAt", "id", "seen", "sent", "text") SELECT "chatSingleId", "createdAt", "id", "seen", "sent", "text" FROM "MessageSingle";
DROP TABLE "MessageSingle";
ALTER TABLE "new_MessageSingle" RENAME TO "MessageSingle";
CREATE TABLE "new_ChatGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "adminUsers" TEXT NOT NULL
);
INSERT INTO "new_ChatGroup" ("adminUsers", "createdAt", "id", "updatedAt") SELECT "adminUsers", "createdAt", "id", "updatedAt" FROM "ChatGroup";
DROP TABLE "ChatGroup";
ALTER TABLE "new_ChatGroup" RENAME TO "ChatGroup";
CREATE TABLE "new_MessageGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatGroupId" TEXT,
    "text" TEXT NOT NULL,
    "seenBy" TEXT NOT NULL,
    "sentTo" TEXT NOT NULL,
    CONSTRAINT "MessageGroup_chatGroupId_fkey" FOREIGN KEY ("chatGroupId") REFERENCES "ChatGroup" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MessageGroup" ("chatGroupId", "createdAt", "id", "seenBy", "sentTo", "text") SELECT "chatGroupId", "createdAt", "id", "seenBy", "sentTo", "text" FROM "MessageGroup";
DROP TABLE "MessageGroup";
ALTER TABLE "new_MessageGroup" RENAME TO "MessageGroup";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "password", "updatedAt", "username") SELECT "createdAt", "email", "id", "password", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
