"use client";

import React, { Suspense } from "react";
import LoadingSuspense from "./LoadingSuspense";

interface SuspenseElemProps {
  children?: React.ReactNode;
}

const SuspenseElem = ({ children }: SuspenseElemProps) => {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>;
};

export default SuspenseElem;
