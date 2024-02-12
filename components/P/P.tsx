import { ReactNode } from "react";

export default function P({ children }: { children: ReactNode }) {
  return <p className={"indent-8 text-lg font-serif"}>{children}</p>;
}
