const githubUsername = "andresperez96";
const gitRepos = (username) => `https://api.github.com/users/${username}/repos`;

export const URLs = {
    gitRepo: gitRepos(githubUsername),
};
