import { SearchBar } from "../SearchBar";
import { FilterMenu } from "./FilterMenu";
import { CountrySelect } from "../CountrySelect";
import Link from "next/link";
import { ExploreButton } from "./ExploreButton";

export function Navbar() {
  return (
    <div className="fixed w-full px-4 py-2 max-w-[1440px] bg-zinc-50 border-b border-zinc-950/10 z-[9999]">
      <div className="flex gap-4 justify-center w-full items-center ">
        <Link className="font-medium py-1 px-3" href="/">
          .j<span className="text-blue-600 font-medium">s</span>
        </Link>

        <div className="flex gap-4 justify-center items-center flex-1 ">
          <SearchBar className="hidden sm:flex" />
          <div className="hidden sm:flex ">
            <CountrySelect />
          </div>
        </div>
        <FilterMenu className="flex justify-end" />
        <ExploreButton className="flex justify-end" />
      </div>
    </div>
  );
}
