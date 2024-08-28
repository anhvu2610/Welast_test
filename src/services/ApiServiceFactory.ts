import GitHubService from './GitHubService';

class ApiServiceFactory {
  static createService(serviceType: string) {
    switch (serviceType) {
      case 'github':
        return GitHubService.getInstance(); // Sử dụng getInstance để lấy instance của GitHubService
      default:
        throw new Error('Invalid service type');
    }
  }
}

export default ApiServiceFactory;
