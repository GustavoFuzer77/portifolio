import { apiGithub } from "../api";
import { TRepo } from "../types/type";

export const fetchRepos = async () => {
  const response = await apiGithub.get<TRepo[]>("/user/repos", {
    params: {
      visibility: "public",
    },
  });
  return response.data;
};
