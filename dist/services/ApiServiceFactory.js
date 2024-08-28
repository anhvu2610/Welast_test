"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubService_1 = __importDefault(require("./GitHubService"));
class ApiServiceFactory {
    static createService(serviceType) {
        switch (serviceType) {
            case 'github':
                return GitHubService_1.default.getInstance(); // Sử dụng getInstance để lấy instance của GitHubService
            default:
                throw new Error('Invalid service type');
        }
    }
}
exports.default = ApiServiceFactory;
