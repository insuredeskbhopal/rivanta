import "server-only";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";
import { getDatabaseUrl } from "./database-url.ts";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter: new PrismaPg({ connectionString: getDatabaseUrl(), connectionTimeoutMillis: 5000 }),
});

// Reuse the connection across Next.js development hot reloads.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
