import "dotenv/config";
import assert from "node:assert/strict";
import { prisma } from "../src/lib/prisma.ts";

try {
  const rows = await prisma.$queryRaw`SELECT 1 AS connected`;
  assert.equal(Number(rows[0].connected), 1);
  console.log("PASS: the server-only Prisma client connected to PostgreSQL and executed SELECT 1");
} catch (error) {
  // Connection errors can contain credentials or host details; keep output minimal.
  console.error("FAIL: PostgreSQL connectivity check", error.code ?? error.name);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
