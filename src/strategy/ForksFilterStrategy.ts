import { Repo } from '../services/GitHubAdapter';

class ForksFilterStrategy {
  filter(repos: Repo[]): Repo[] {
    return repos.filter(repo => !repo.fork && repo.forks > 5);
  }
}

export default ForksFilterStrategy;
