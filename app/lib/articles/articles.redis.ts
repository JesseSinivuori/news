import "server-only";
import { kv } from "@vercel/kv";
import { ArticleProps, ArticlesResponseProps } from "./articles.fetch";
import { ArticleSearchParamsSchema } from "./articles.zod";

export const cacheArticles = async (articles: ArticleProps[], key: string) => {
  try {
    const serializedArticles = JSON.stringify(articles);

    await kv.set(key, serializedArticles, {
      ex: 3600 * 24, //expires in 24 hours
    });
  } catch (error) {
    console.error("Error setting articles to cache:", error);
  }
};

export const getCachedArticles = async (
  key: string
): Promise<ArticlesResponseProps | undefined> => {
  try {
    const articles = await kv.get(key);

    if (articles) {
      return {
        totalResults: Object.values(articles)[1],
        articles: Object.values(articles)[2],
        error: null,
      };
    }
  } catch (error) {
    console.error("Error getting cached articles:", error);
  }
};
