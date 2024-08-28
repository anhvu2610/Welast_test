import axios from "axios";

class GitHubService {
  private static instance: GitHubService;
  private apiUrl: string = "https://api.github.com/users/freeCodeCamp/repos";

  // Đảm bảo constructor là private để thực hiện Singleton
  private constructor() {}

  static getInstance(): GitHubService {
    if (!GitHubService.instance) {
      GitHubService.instance = new GitHubService();
    }
    return GitHubService.instance;
  }

  async fetchRepos() {
    try {
      const response = await axios.get(this.apiUrl);
      console.log('response.data.length', response.data.length)
      return response.data;
    } catch (error) {
      console.error("Error fetching repos:", error);
      return [];
    }
  }
}

export default GitHubService;
