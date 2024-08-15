import { z } from "zod";

const envSchema = z.object({
  CONTENTFUL_SPACE_ID: z.string(),
  CONTENTFUL_ACCESS_TOKEN: z.string(),
  CONTENTFUL_API_URL: z.string(),
  CONTENTFUL_REVALIDATE_SECRET: z.string(),
  BASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
