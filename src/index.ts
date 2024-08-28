import express, { Request, Response } from "express";
import cors from "cors"; 
import ApiServiceFactory from "./services/ApiServiceFactory";
import GitHubAdapter from "./services/GitHubAdapter";
import ForksFilterStrategy from "./strategy/ForksFilterStrategy";
import RepositoryFilter from "./strategy/RepositoryFilter";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to WeLAST Fullstack Exercise!");
});

app.get("/repos", async (req: Request, res: Response) => {
  try {
    const service = ApiServiceFactory.createService("github");
    const adapter = new GitHubAdapter(service);
    const repositories = await adapter.getRepos();

    const filter = new RepositoryFilter(new ForksFilterStrategy());
    const filteredRepos = filter.filter(repositories);

    res.json(filteredRepos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
