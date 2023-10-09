import Link from "next/link";
import { ArticleProps } from "../lib/articles/articles.fetch";
import { timeAgo } from "../lib/timeAgo";
import { Badge } from "./ui/badge";

type ArticleCardProps = {
  article: ArticleProps;
} & React.ComponentProps<"div">;

export function ArticleCard({ article, ...props }: ArticleCardProps) {
  return (
    <div className="flex flex-col w-full max-w-[400px] p-4" {...props}>
      <div className="p-4 flex-1 border border-zinc-950/20 rounded-md flex flex-col">
        <Link
          href={article.url}
          className="overflow-hidden flex rounded-md"
          rel="no_referrer"
          target="_blank"
          tabIndex={-1}
        >
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={article.urlToImage}
            alt={""}
            loading="lazy"
            className="hover:scale-105 transition-all duration-300"
          />
        </Link>
        <div className="flex flex-col pt-2">
          <Link
            href={article.url}
            className="hover:text-blue-600 transition-all duration-300"
            rel="no_referrer"
            target="_blank"
          >
            <h2 className="text-xl font-bold mb-2 w-full text-zinc-950/90 dark:text-zinc-50/90 hover:text-blue-700">
              {article.title}
            </h2>
          </Link>
          <p className="text-ellipsis overflow-hidden hyphens-auto text-zinc-950/75 dark:text-zinc-50/75">
            {article.description}
          </p>
        </div>
        <div className="flex flex-1 flex-wrap pt-4 gap-2 items-end">
          <div className="flex flex-1 whitespace-nowrap">
            {timeAgo(article.publishedAt)}
          </div>
          <Badge className="flex justify-end">
            <Link
              href={article.url}
              rel="no_referrer"
              target="_blank"
              tabIndex={-1}
            >
              {article.source.name.replace(".com", "")}
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
}
