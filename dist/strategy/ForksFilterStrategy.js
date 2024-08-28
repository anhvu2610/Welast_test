"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForksFilterStrategy {
    filter(repos) {
        return repos.filter(repo => !repo.forks && repo.forks > 5);
    }
}
exports.default = ForksFilterStrategy;
