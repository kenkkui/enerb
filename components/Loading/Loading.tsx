"use client";

import { useAnimate } from "framer-motion";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import gsapEasing from "@tools/gsapEasing";

interface LoadingProps {
  timeoutDone?: boolean;
}

const Loading = ({ timeoutDone }: LoadingProps) => {
  const [scope, animate] = useAnimate();
  const [text, setText] = useState("");
  const textElemRef = useRef<HTMLDivElement | null>(null);

  const animateText = () => {
    console.log("start function: animateText");
    setTimeout(() => {
      if (timeoutDone && textElemRef.current) {
        const rect = textElemRef.current.getBoundingClientRect();
        const currentY = rect.top;

        const distance = window.innerHeight - currentY;

        animate(
          textElemRef.current,
          { y: distance, opacity: 0 },
          { duration: 1.2, ease: [0.6, 0.04, 0.98, 0.34] }
        );

        animate(
          scope.current,
          { opacity: 0 },
          { duration: 0.8, ease: "linear", delay: 0.8 }
        );
      }
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        setText((prev) => {
          if (prev.length < 3) {
            return prev + ".";
          } else {
            return "";
          }
        });
      },
      text.length < 3 ? 150 : 600
    );

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (timeoutDone) {
      animateText();
    }
  }, [timeoutDone]);

  const loadingText = "loading" + text;

  return (
    <div
      className="h-screen w-screen bg-black text-white text-[24px] overflow-hidden"
      ref={scope}
    >
      <div
        ref={textElemRef}
        className="fixed top-1/2 left-1/2 -transform-x-1/2 -transform-y-1/2"
      >
        {timeoutDone ? "done" : loadingText}
      </div>
    </div>
  );
};

export default Loading;
