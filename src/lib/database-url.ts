/** Keep credentials on the server and fail clearly when a connection is missing. */
export function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is missing. Copy .env.example to .env.");
  if (!/^postgres(?:ql)?:\/\//.test(url)) {
    throw new Error("DATABASE_URL must be a PostgreSQL connection string.");
  }

  return url;
}
