"use client";
import { useEffect, useState } from "react";

export function LandingRotatingText({
  rotatingTextArray,
}: {
  rotatingTextArray: string[];
}) {
  const [currentClassName, setCurrentClassName] = useState(
    rotatingClassNames[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousClassName, setPreviousClassName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClassName((prevClassName) => {
        setPreviousClassName(prevClassName);
        const nextClassNameIndex =
          rotatingClassNames.indexOf(prevClassName) + 1;
        if (nextClassNameIndex !== rotatingClassNames.length) {
          return rotatingClassNames[nextClassNameIndex];
        } else {
          return rotatingClassNames[0];
        }
      });

      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTextArray.length
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, rotatingTextArray.length]);

  return (
    <span className={`relative flex w-full h-full`}>
      {rotatingTextArray.map((text, i) => (
        <span
          key={text}
          className={`flex md:w-[462px] bg-clip-text text-transparent transition-all duration-1000   ${
            i === currentIndex
              ? `${currentClassName} opacity-100`
              : `${previousClassName} opacity-0 translate-x-full blur-xl absolute`
          }`}
        >
          {text}
        </span>
      ))}
    </span>
  );
}

const rotatingClassNames = [
  "bg-gradient-to-br from-red-500 to-amber-500 ",
  "bg-gradient-to-br from-blue-500 to-emerald-500 ",
  "bg-gradient-to-br from-rose-500 to-fuchsia-500 ",
];
