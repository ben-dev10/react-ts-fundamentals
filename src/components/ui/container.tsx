import { ReactNode } from "react";

export default function Container({
  children,
  size,
  className,
}: {
  children: ReactNode;
  size: "4xl" | "5xl" | "6xl";
  className?: string;
}) {
  let variant;
  if (size == "4xl") {
    variant = "max-w-4xl";
  } else if (size == "5xl") {
    variant = "max-w-5xl";
  } else {
    variant = "max-w-6xl";
  }
  return (
    <div className={`wrapper mx-auto ${variant} ${className}`}>{children}</div>
  );
}
