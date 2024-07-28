import { cn } from "@/helpers/cn";
import { fetchRepos } from "@/services/http/github";
import { TRepo } from "@/services/types/type";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";

export default async function Project() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });

  const data: TRepo[] = queryClient.getQueryData(["repos"]) ?? [];

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="w-full">
        <div
          className={cn(
            "flex items-center justify-center sticky top-0 backdrop-blur"
          )}
        >
          <h1 className="font-bold">Meus Repositórios Públicos</h1>
        </div>
        <div className="px-2 cursor-pointer">
          <div className="flex-1">
            {data.map((repo, i) => (
              <Link key={i} target="_blank" href={repo.html_url}>
                <div className="w-full flex flex-col justify-center border border-gray-200 rounded-lg shadow transition duration-300 hover:border-blue-950 hover:shadow-lg space-y-2 my-2">
                  <div className="p-4">
                    <h2 className="text-lg font-bold">{repo.name}</h2>
                    <p className="text-sm text-gray-600">{repo.full_name}</p>
                    <p className="text-sm text-gray-600">{repo.private}</p>
                  </div>

                  <div className="p-4 ">
                    <p className="text-sm text-gray-600">
                      Ultíma atualização:{" "}
                      {moment(repo.updated_at).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </HydrationBoundary>
  );
}
