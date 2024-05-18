import { cn } from "@/helpers/cn";
import { useEffect, useState } from "react";

export default function ContainerComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const userTheme = (localStorage.getItem("theme") as null) ?? "dark";

  const themeColor = {
    dark: "",
    light: "",
  };

  return (
    <div className={cn("h-full max-w-prose rounded-xl", themeColor[userTheme])}>
      {children}
    </div>
  );
}
