import { LinkComponent } from "./ui/link";
import { CategorySchema, CountrySchema } from "../lib/articles/articles.zod";
import { useFilterMenuContext } from "../providers/FilterMenuProvider";

export const CategoryLink = ({
  category,
  country,
  currentCategory,
  q,
}: {
  category: CategorySchema;
  country: CountrySchema;
  currentCategory: string | null;
  q: string | null;
}) => {
  const { setFilterMenuIsOpen } = useFilterMenuContext();
  return (
    <LinkComponent
      onClick={() => setFilterMenuIsOpen(false)}
      className={`${
        currentCategory === category.toLocaleLowerCase() && !q
          ? "underline "
          : "hover:underline"
      }`}
      href={`/articles/top-headlines?country=${country}&category=${category.toLocaleLowerCase()}&page=1`}
    >
      {category}
    </LinkComponent>
  );
};
