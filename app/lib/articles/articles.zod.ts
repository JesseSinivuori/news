import { z } from "zod";

export const countrySchema = z.union([
  z.literal("ae"),
  z.literal("ar"),
  z.literal("at"),
  z.literal("au"),
  z.literal("be"),
  z.literal("bg"),
  z.literal("br"),
  z.literal("ca"),
  z.literal("ch"),
  z.literal("cn"),
  z.literal("co"),
  z.literal("cu"),
  z.literal("cz"),
  z.literal("de"),
  z.literal("eg"),
  z.literal("fr"),
  z.literal("gb"),
  z.literal("gr"),
  z.literal("hk"),
  z.literal("hu"),
  z.literal("id"),
  z.literal("ie"),
  z.literal("il"),
  z.literal("in"),
  z.literal("it"),
  z.literal("jp"),
  z.literal("kr"),
  z.literal("lt"),
  z.literal("lv"),
  z.literal("ma"),
  z.literal("mx"),
  z.literal("my"),
  z.literal("ng"),
  z.literal("nl"),
  z.literal("no"),
  z.literal("nz"),
  z.literal("ph"),
  z.literal("pl"),
  z.literal("pt"),
  z.literal("ro"),
  z.literal("rs"),
  z.literal("ru"),
  z.literal("sa"),
  z.literal("se"),
  z.literal("sg"),
  z.literal("si"),
  z.literal("sk"),
  z.literal("th"),
  z.literal("tr"),
  z.literal("tw"),
  z.literal("ua"),
  z.literal("us"),
  z.literal("ve"),
  z.literal("za"),
  z.literal(""),
]);

export type CountrySchema = z.infer<typeof countrySchema>;

export const categorySchema = z.union([
  z.literal("business"),
  z.literal("entertainment"),
  z.literal("general"),
  z.literal("health"),
  z.literal("science"),
  z.literal("sports"),
  z.literal("technology"),
  z.literal(""),
]);

export type CategorySchema = z.infer<typeof categorySchema>;

export const qSchema = z.string().max(200);

export const apiEndpointSchema = z.union([
  z.literal("everything"),
  z.literal("top-headlines"),
]);
export type APIEndpointSchema = z.infer<typeof apiEndpointSchema>;

export const articleSearchParamsSchema = z.object({
  apiEndpoint: apiEndpointSchema,
  country: countrySchema.optional(),
  category: categorySchema.optional(),
  q: qSchema.optional(),
  pageSize: z.string().optional(),
  page: z.string(),
});

export type ArticleSearchParamsSchema = z.infer<
  typeof articleSearchParamsSchema
>;
