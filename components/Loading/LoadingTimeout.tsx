"use client";

import { useEffect } from "react";
import Loading from "./Loading";

interface LoadingTimeoutProps {
  setTimeoutDone: React.Dispatch<React.SetStateAction<boolean>>;
  timeoutDone: boolean;
}

const LoadingTimeout = ({
  setTimeoutDone,
  timeoutDone,
}: LoadingTimeoutProps) => {
  // const [render, setRender] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutDone(true);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
      <Loading timeoutDone={timeoutDone} />
    </div>
  );
};

export default LoadingTimeout;
