import { Articles } from "../components/Articles";
import { fetchArticles } from "../lib/articles/articles.fetch";
import { PaginationButtons } from "../components/PaginationButtons";
import { ErrorMessage } from "../components/Error";
import {
  APIEndpointSchema,
  ArticleSearchParamsSchema,
} from "../lib/articles/articles.zod";
import { CategoryBar } from "../components/CategoryBar";

export type ArticlesPageProps = {
  params: { articles: ["articles", APIEndpointSchema] };
  searchParams: ArticleSearchParamsSchema;
};

export default async function ArticlesPage({
  params,
  searchParams,
}: ArticlesPageProps) {
  const apiEndpoint = params.articles && params?.articles[1];

  const { country, category, page, q } = searchParams;

  const reqSearchParams: ArticleSearchParamsSchema = {
    apiEndpoint: apiEndpoint,
    category: category,
    q: q,
    country: country,
    page: page,
  };

  const { articles, totalResults, error } = await fetchArticles(
    reqSearchParams
  );

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <CategoryBar className="sm:flex hidden pt-4" />
      <Articles articles={articles} />
      <PaginationButtons
        className="pb-16"
        reqSearchParams={reqSearchParams}
        totalResults={totalResults}
      />
    </>
  );
}
