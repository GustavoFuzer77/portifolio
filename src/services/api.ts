import axios from "axios";

export const apiGithub = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
      Authorization: `token ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
  },
});
