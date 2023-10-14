import { LinkComponentButtonBlue } from "../ui/link";
import { LandingRotatingText } from "./LandingRotatingText";

export function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center md:pt-16 pt-4">
        <h1 className="flex justify-center items-center gap-4 p-4 flex-col md:flex-row font-extrabold md:text-8xl sm:text-7xl text-5xl text-zinc-950/90">
          Stay
          <LandingRotatingText rotatingTextArray={rotatingTextArray} />
        </h1>
      </div>
      <p className="hyphens-auto text-zinc-950/75 font-medium max-w-[680px]">{`Every moment brings a new headline, a fresh perspective, a challenge to conquer. With us by your side, you're not just staying updated—you're staying prepared. Discover the stories that matter most, right here.`}</p>
      <LinkComponentButtonBlue href="/articles/top-headlines?country=us&category=technology&page=1">
        Explore
      </LinkComponentButtonBlue>
    </section>
  );
}

const rotatingTextArray = ["informed.", "updated.", "relevant."];
