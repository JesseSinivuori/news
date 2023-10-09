"use client";
import { useSearchParams } from "next/navigation";
import { CategorySchema, CountrySchema } from "../lib/articles/articles.zod";
import { CategoryLink } from "./CategoryLink";

export function CategoryBar({
  categoryClassName,
  className,
  ...props
}: { categoryClassName?: string } & React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "us";
  const q = searchParams.get("q");
  const currentCategory = searchParams.get("category") || "technology";

  return (
    <div className={`${className || ""} flex flex-col`} {...props}>
      <div className="gap-2 flex flex-col sm:justify-center sm:items-center">
        <h2 className="font-bold flex text-xl">Top Headlines</h2>
        <div className="flex ">
          <div className={`${categoryClassName || ""} flex`}>
            {categories.map((category) => (
              <CategoryLink
                key={category}
                category={category as CategorySchema}
                country={country as CountrySchema}
                currentCategory={currentCategory}
                q={q}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];
