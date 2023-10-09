import { pageSize } from "../lib/articles/articles.fetch";
import { ArticleSearchParamsSchema } from "../lib/articles/articles.zod";
import { LinkComponentOutline } from "./ui/link";

type PaginationButtonsProps = {
  totalResults: number;
  reqSearchParams: ArticleSearchParamsSchema;
};

export const PaginationButtons = ({
  totalResults,
  reqSearchParams,
  className,
  ...props
}: PaginationButtonsProps & React.ComponentProps<"div">) => {
  const { apiEndpoint, country, category, page, q } = reqSearchParams;

  const pageAsNumber = Number(page || 1);
  const totalPages = Math.ceil(totalResults / Number(pageSize));

  const nextPage = (
    pageAsNumber < totalPages ? pageAsNumber + 1 : pageAsNumber
  ).toString();
  const prevPage = (pageAsNumber > 1 ? pageAsNumber - 1 : 1).toString();

  if (!totalPages || totalPages === 1) return null;

  return (
    <div
      className={`${
        className || ""
      } flex w-full flex-wrap items-center justify-center gap-3 whitespace-nowrap pt-16`}
      {...props}
    >
      {pageAsNumber !== 1 && (
        <LinkComponentOutline
          href={`/articles/${apiEndpoint}${q ? `?q=${q}` : ""}${
            country ? `?country=${country}` : ""
          }${category ? `&category=${category}` : ""}&page=${prevPage}`}
          scroll={false}
        >
          Previous
        </LinkComponentOutline>
      )}
      <div className="flex items-center justify-center px-3 text-zinc-950/75 dark:text-zinc-50/75">
        {page} of {totalPages}
      </div>
      {pageAsNumber !== totalPages && (
        <LinkComponentOutline
          href={`/articles/${apiEndpoint}${q ? `?q=${q}` : ""}${
            country ? `?country=${country}` : ""
          }${category ? `&category=${category}` : ""}&page=${nextPage}`}
          scroll={false}
        >
          Next
        </LinkComponentOutline>
      )}
    </div>
  );
};
