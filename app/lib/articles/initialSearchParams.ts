import { ArticleSearchParamsSchema } from "./articles.zod";

export const initialSearchParams: ArticleSearchParamsSchema = {
  apiEndpoint: "top-headlines",
  category: "technology",
  country: "us",
  page: "1",
};
