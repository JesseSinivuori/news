"use client";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePathname, useRouter } from "next/navigation";
import { qSchema } from "../lib/articles/articles.zod";
import toast from "react-hot-toast";
import { useFilterMenuContext } from "../providers/FilterMenuProvider";

export function SearchBar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { filterMenuIsOpen } = useFilterMenuContext();

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  if (pathname === "/landing") return null;

  const handleSearch = () => {
    const q = inputRef.current?.value;
    if (!q) return;

    const parse = qSchema.safeParse(q);
    if (!parse.success) {
      return toast.error("Search can not be over 100 characters.");
    }
    const encodedQ = encodeURIComponent(q);

    const url = `/articles/everything?q=${encodedQ}&page=${1}`;

    router.push(url);

    inputRef.current.value = "";
  };

  return (
    <div
      className={`${className || ""} flex flex-col justify-center items-center`}
      {...props}
    >
      <div className="w-full flex flex-wrap justify-center items-center gap-4">
        <Input
          autoFocus={filterMenuIsOpen}
          className="max-w-[300px] w-full flex-1"
          placeholder="Search..."
          aria-label="Search"
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          type="button"
          onClick={handleSearch}
          className="!bg-blue-700 !text-zinc-50/90"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
