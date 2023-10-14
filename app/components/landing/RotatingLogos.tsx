import Image from "next/image";

export function RotatingLogos() {
  return (
    <section className="flex flex-col justify-center items-center gap-16">
      <h2 className="font-extrabold  text-center text-3xl text-zinc-950/90">
        Trusted sources
      </h2>
      <div
        className="justify-center flex whitespace-nowrap overflow-x-hidden px-4"
        aria-hidden
      >
        <div className="relative flex">
          <div className="flex animate-marquee gap-24 pr-24">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="flex flex-col items-center gap-4 opacity-75"
              >
                <Image
                  src={logo.src}
                  alt={""}
                  width={48}
                  height={48}
                  className="min-w-[48px] min-h-[48px]"
                />
                <span className="flex justify-center text-zinc-950 font-semibold text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex absolute inset-0 animate-marquee2 gap-24">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="flex flex-col items-center gap-4 opacity-75"
              >
                <Image
                  src={logo.src}
                  alt={""}
                  width={48}
                  height={48}
                  className="min-w-[48px] min-h-[48px]"
                />
                <span className="flex justify-center text-zinc-950 font-semibold text-sm">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const logos = [
  { name: "BBC", src: "/bbc.svg" },
  { name: "CNN", src: "/cnn.svg" },
  { name: "Google News", src: "/google-news.svg" },
  { name: "Apple News", src: "/apple-news.svg" },
  { name: "NBC", src: "/nbc.svg" },
  { name: "New York Times", src: "/new-york-times.svg" },
  { name: "Verge", src: "/verge.svg" },
  { name: "Youtube", src: "/youtube.svg" },
];
