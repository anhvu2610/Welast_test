import { Repo } from '../services/GitHubAdapter';

class RepositoryFilter {
  private strategy: { filter: (repos: Repo[]) => Repo[] };

  constructor(strategy: { filter: (repos: Repo[]) => Repo[] }) {
    this.strategy = strategy;
  }

  filter(repos: Repo[]): Repo[] {
    return this.strategy.filter(repos);
  }
}

export default RepositoryFilter;
