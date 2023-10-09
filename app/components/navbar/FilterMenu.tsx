"use client";
import { Button } from "../ui/button";
import { CategoryBar } from "../CategoryBar";
import { SearchBar } from "../SearchBar";
import { useFilterMenuContext } from "@/app/providers/FilterMenuProvider";
import { CountrySelect } from "../CountrySelect";

export function FilterMenu({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { filterMenuIsOpen, setFilterMenuIsOpen } = useFilterMenuContext();

  return (
    <div className={`${className || ""} flex sm:hidden `} {...props}>
      <Button onClick={() => setFilterMenuIsOpen(!filterMenuIsOpen)}>
        <span className="px-2 xl:hidden flex">Filters</span>
        <FilterIcon />
      </Button>
      {filterMenuIsOpen && (
        <>
          <div
            className="fixed inset-0 w-full h-full bg-zinc-950/25"
            onClick={() => setFilterMenuIsOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 bottom-0 justify-center items-center z-10">
            <div className="bg-zinc-50 h-screen">
              <div className="flex flex-col rounded-md p-4 gap-4 items-start">
                <Button
                  onClick={() => setFilterMenuIsOpen(false)}
                  className="flex-1 !p-2 "
                >
                  <CloseIcon />
                </Button>
                <SearchBar />
                <CountrySelect />
                <CategoryBar
                  className="flex-col sm:hidden"
                  categoryClassName="flex-col"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
const FilterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`${className || ""}w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
    />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`${className || ""}w-6 h-6`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
