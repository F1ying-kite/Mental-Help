import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className={"text-2xl font-serif text-center mt-4 text-blue-500"}>
      {children}
    </h1>
  );
}
