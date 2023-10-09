"use client";
import { createContext, useContext, useEffect, useState } from "react";

type FilterMenuContextProps = {
  filterMenuIsOpen: boolean;
  setFilterMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null;

const FilterMenuContext = createContext<FilterMenuContextProps>(null);

export function FilterMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);

  useEffect(() => {
    if (filterMenuIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [filterMenuIsOpen]);

  return (
    <FilterMenuContext.Provider
      value={{ filterMenuIsOpen, setFilterMenuIsOpen }}
    >
      {children}
    </FilterMenuContext.Provider>
  );
}

export const useFilterMenuContext = () => {
  const context = useContext(FilterMenuContext);
  if (!context) {
    throw new Error(
      "useFilterMenuContext must be used within FilterMenuProvider"
    );
  }
  return context;
};
