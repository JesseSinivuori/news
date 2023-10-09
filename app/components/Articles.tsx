import { Suspense } from "react";
import { ArticleProps } from "../lib/articles/articles.fetch";
import { ArticleCard } from "./ArticleCard";
import Loading from "../loading";

export function Articles({ articles }: { articles: ArticleProps[] }) {
  if (!articles.length) {
    return (
      <div className="flex justify-center items-center">No news found.</div>
    );
  }

  return (
    <div className="p-4 flex flex-wrap justify-center">
      <Suspense fallback={<Loading />}>
        {articles?.map((article) => (
          <ArticleCard key={article.url} article={article}></ArticleCard>
        ))}
      </Suspense>
    </div>
  );
}
