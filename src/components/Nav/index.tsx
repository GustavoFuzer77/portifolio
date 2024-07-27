import { cn } from "@/helpers/cn";
import Link from "next/link";

export default function Nav({ theme }: { theme: "dark" | "light" }) {
  const color = {
    dark: "group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200",
    light:
      "group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-600 ",
  };

  ("nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none");

  return (
    <ul className="my-16 w-max">
      <li>
        <Link
          className="group flex items-center py-3 active"
          href="/"
        >
          <span
            className={cn(
              "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 motion-reduce:transition-none",
              color[theme]
            )}
          ></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest   ">
            Início
          </span>
        </Link>
      </li>
      <li>
        <Link
          className="group flex items-center py-3 active"
          href="experiencias"
        >
          <span
            className={cn(
              "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 motion-reduce:transition-none",
              color[theme]
            )}
          ></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest   ">
            Experiência
          </span>
        </Link>
      </li>
      <li>
        <Link className="group flex items-center py-3" href="/projects">
          <span
            className={cn(
              "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 motion-reduce:transition-none",
              color[theme]
            )}
          ></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest">
            Projetos
          </span>
        </Link>
      </li>
    </ul>
  );
}
