import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://new-skink-43896.upstash.io",
  token: process.env.REDIS_KEY!,
});
