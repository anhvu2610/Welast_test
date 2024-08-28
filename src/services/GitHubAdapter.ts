import GitHubService from "./GitHubService";

export interface Repo {
    name: string;
    description: string;
    language: string;
    fork: boolean;
    forks: number;
  }
  
  class GitHubAdapter {
    private gitHubService: GitHubService;
  
    constructor(gitHubService: GitHubService) {
      this.gitHubService = gitHubService;
    }
  
    async getRepos(): Promise<Repo[]> {
      const repos = await this.gitHubService.fetchRepos();
      return repos.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        fork: repo.fork,
        forks: repo.forks
      }));
    }
  }
  
  export default GitHubAdapter;
  