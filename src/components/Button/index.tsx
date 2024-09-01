import { cn } from "@/helpers/cn";

export const ButtonComponent = ({
  children,
  theme = "dark",
  border = "solid",
  onClick,
}: {
  children: React.ReactNode;
  theme?: "dark" | "light";
  border?: "dashed" | "solid";
  onClick: () => void;
}) => {
  const buttonDefault =
    "flex items-center gap-2 px-4 py-2 text-md rounded-lg font-semibold focus:outline-none";

  const themes = {
    dark: "border border-morning bg-gray-900 text-zinc-300 hover:bg-gray-800",
    light: "border border-night bg-zinc-300 text-gray-900 hover:zinc-400",
  };

  const borders = {
    dashed: "border-dashed border-2",
    solid: "border-solid border-2",
  };

  return (
    <button
      onClick={onClick}
      className={cn(buttonDefault, themes[theme], borders[border])}
    >
      {children}
    </button>
  );
};
