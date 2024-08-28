"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApiServiceFactory_1 = __importDefault(require("./services/ApiServiceFactory"));
const GitHubAdapter_1 = __importDefault(require("./services/GitHubAdapter"));
const ForksFilterStrategy_1 = __importDefault(require("./strategy/ForksFilterStrategy"));
const RepositoryFilter_1 = __importDefault(require("./strategy/RepositoryFilter"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Welcome to WeLAST Fullstack Exercise!");
});
app.get("/repos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = ApiServiceFactory_1.default.createService("github");
        const adapter = new GitHubAdapter_1.default(service);
        const repositories = yield adapter.getRepos();
        const filter = new RepositoryFilter_1.default(new ForksFilterStrategy_1.default());
        const filteredRepos = filter.filter(repositories);
        res.json(filteredRepos);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
