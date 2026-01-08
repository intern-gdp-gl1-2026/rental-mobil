// lib/prisma.js
// Singleton Prisma Client to avoid exhausting DB connections during dev (hot-reload)
const { PrismaClient } = require('@prisma/client');

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

module.exports = global.prisma;
