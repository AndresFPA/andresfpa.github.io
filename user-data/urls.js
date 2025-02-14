const githubUsername = "andresperez96";

const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://api.github.com/users/${username}/repos`;

export const URLs = {
    gitConnected: createGitConnectedURL(githubUsername),
    gitRepo: gitRepos(githubUsername),
};
