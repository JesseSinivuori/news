import Image from "next/image";

export function ArticleShowcase() {
  return (
    <div className="flex flex-col pb-16">
      <div className="flex flex-col justify-center items-center  gap-16">
        <h2 className="font-extrabold text-center text-3xl text-zinc-950/90">
          Discover articles
        </h2>

        <div className="flex relative">
          <Image
            src={"/article1.png"}
            alt={""}
            width={368}
            height={489}
            className="flex border-b border-zinc-950/20 rounded-md z-10"
          />
          <Image
            src={"/article2.png"}
            alt={""}
            width={368}
            height={489}
            className="flex absolute md:left-60 left-20 md:top-10 top-24 border-b border-zinc-950/20 rounded-md md:hover:left-80 transition-all duration-500"
          />
          <Image
            src={"/article3.png"}
            alt={""}
            width={368}
            height={489}
            className="flex absolute md:right-60 right-20 top-20 border-b border-zinc-950/20 rounded-md md:hover:right-80 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
