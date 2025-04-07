"use client";

import { useEffect, useState } from "react";

const Loading = () => {
  const [text, setText] = useState("");

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

  const loadingText = "loading" + text;

  return (
    <div className="h-screen w-screen bg-black text-white text-[24px]  flex justify-center items-center text-center">
      {loadingText}
    </div>
  );
};

export default Loading;
