import { LinkComponentButtonBlue } from "../ui/link";

export function StatsSection() {
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="text-center">
          <h2 className="font-extrabold text-3xl text-zinc-950/90">1M+</h2>
          <p className="text-zinc-950/75">Users</p>
        </div>

        <div className="text-center">
          <h2 className="font-extrabold text-3xl text-zinc-950/90">500+</h2>
          <p className="text-zinc-950/75">Articles Daily</p>
        </div>

        <div className="text-center">
          <h2 className="font-extrabold text-3xl text-zinc-950/90">50K+</h2>
          <p className="text-zinc-950/75">Active Contributors</p>
        </div>

        <div className="text-center">
          <h2 className="font-extrabold text-3xl text-zinc-950/90">180+</h2>
          <p className="text-zinc-950/75">Countries Reached</p>
        </div>

        <div className="text-center">
          <h2 className="font-extrabold text-3xl text-zinc-950/90">80K+</h2>
          <p className="text-zinc-950/75">Sources</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-center mt-8 text-zinc-950/75">
          Join our growing community and stay updated with the latest news.
        </p>
        <LinkComponentButtonBlue href="/articles/top-headlines?country=us&category=technology&page=1">
          Explore
        </LinkComponentButtonBlue>
      </div>
    </section>
  );
}
