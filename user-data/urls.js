const githubUsername = "andresfpa";
const gitRepos = (username) => `https://api.github.com/users/${username}/repos`;

export const URLs = {
    gitRepo: gitRepos(githubUsername),
};
