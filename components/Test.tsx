"use client";

interface TestProps {
  children?: React.ReactNode;
}

const Test = ({ children }: TestProps) => {
  return <div>{children}</div>;
};

export default Test;
