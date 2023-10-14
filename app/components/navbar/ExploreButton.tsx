"use client";
import { usePathname } from "next/navigation";
import { LinkComponentButtonBlue } from "../ui/link";

export function ExploreButton({ className }: { className?: string }) {
  const pathname = usePathname();
  if (pathname !== "/landing") return null;

  return (
    <LinkComponentButtonBlue
      href="/articles/top-headlines?country=us&category=technology&page=1"
      className={`${className || ""}`}
    >
      Explore
    </LinkComponentButtonBlue>
  );
}
