"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryFilter {
    constructor(strategy) {
        this.strategy = strategy;
    }
    filter(repos) {
        return this.strategy.filter(repos);
    }
}
exports.default = RepositoryFilter;
