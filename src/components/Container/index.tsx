import { cn } from "@/helpers/cn";

export default function ContainerComponent({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: "dark" | "light";
}) {
  const themeColor = {
    dark: "",
    light: "",
  };

  return (
    <div
      className={cn(
        "flex items-start justify-start overflow-y-auto w-full rounded-lg",
        themeColor[theme]
      )}
    >
      {children}
    </div>
  );
}
