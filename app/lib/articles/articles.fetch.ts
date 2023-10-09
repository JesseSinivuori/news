import "server-only";
import { cacheArticles, getCachedArticles } from "./articles.redis";
import {
  ArticleSearchParamsSchema,
  articleSearchParamsSchema,
} from "./articles.zod";

const API_KEY = process.env.NEWS_API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not set");
}

const NEWS_API_URL = "https://newsapi.org/v2";

export type ArticleProps = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
};

export type ArticlesResponseProps = {
  totalResults: number;
  articles: ArticleProps[];
  error: string | null | undefined;
};

export const pageSize = "18";

export const fetchArticles = async (
  reqSearchParams: ArticleSearchParamsSchema
): Promise<ArticlesResponseProps> => {
  const parse = articleSearchParamsSchema.safeParse(reqSearchParams);

  if (!parse.success) {
    return { totalResults: 0, articles: [], error: "Invalid url." };
  }
  const formattedReqSearchParams: ArticleSearchParamsSchema = {
    apiEndpoint: reqSearchParams.apiEndpoint
      ? reqSearchParams.apiEndpoint
      : "top-headlines",
    country: reqSearchParams.country ? reqSearchParams.country : "",
    category: reqSearchParams.category ? reqSearchParams.category : "",
    q: reqSearchParams.q
      ? encodeURIComponent(reqSearchParams.q.toLowerCase())
      : "",
    pageSize: pageSize,
    page: reqSearchParams.page ? reqSearchParams.page : "1",
  };

  const { apiEndpoint, country, category, q, page } = formattedReqSearchParams;

  const urlParams = [
    apiEndpoint || "top-headlines",
    country ? `?country=${country}` : "",
    category ? `&category=${category}` : "",
    q ? `?q=${q}` : "",
    `&pageSize=${pageSize}`,
    page ? `&page=${page}` : "&page=1",
  ].join("");

  const url = `${NEWS_API_URL}/${urlParams}`;

  const cacheKey = `articles${Object.values(formattedReqSearchParams)
    .map((prop) => `${prop ? `_${prop}` : ""}`)
    .join("")}`;

  try {
    const cachedArticles = await getCachedArticles(cacheKey);

    if (cachedArticles) {
      return cachedArticles;
    }
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      throw new Error(data.code);
    }

    if (data.articles.length) {
      cacheArticles(data, cacheKey);
    }

    return {
      totalResults: data.totalResults,
      articles: data.articles,
      error: null,
    };
  } catch (error: any) {
    console.error("Error fetching news:", error);
    return {
      totalResults: 0,
      articles: [],
      error:
        error.message === "rateLimited"
          ? "API limit reached."
          : "Failed to fetch news.",
    };
  }
};
