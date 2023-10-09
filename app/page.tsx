import { Articles } from "./components/Articles";
import { CategoryBar } from "./components/CategoryBar";
import { ErrorMessage } from "./components/Error";
import { PaginationButtons } from "./components/PaginationButtons";
import { fetchArticles } from "./lib/articles/articles.fetch";
import { initialSearchParams } from "./lib/articles/initialSearchParams";

export default async function Home() {
  const { articles, totalResults, error } = await fetchArticles(
    initialSearchParams
  );

  if (error) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div className="flex w-full flex-col">
      <CategoryBar className="hidden sm:flex pt-4" />
      <div className="flex flex-col">
        <Articles articles={articles} />
        <PaginationButtons
          className="pb-16"
          reqSearchParams={initialSearchParams}
          totalResults={totalResults}
        />
      </div>
    </div>
  );
}
