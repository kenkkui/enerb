"use client";

import { Suspense, useState } from "react";
import LoadingSuspense from "./LoadingSuspense";
import LoadingTimeout from "./LoadingTimeout";

interface SuspenseElemProps {
  children?: React.ReactNode;
}

const SuspenseElem = ({ children }: SuspenseElemProps) => {
  const [timeoutDone, setTimeoutDone] = useState(false);

  return (
    <Suspense fallback={<LoadingSuspense />}>
      <section className="h-screen w-screen relative overflow-hidden">
        {/* <BlurDiv /> */}
        <LoadingTimeout
          setTimeoutDone={setTimeoutDone}
          timeoutDone={timeoutDone}
        />
        {children}
      </section>
    </Suspense>
  );
};

export default SuspenseElem;
