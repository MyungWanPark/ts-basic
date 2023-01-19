{
  class HttpClient {
    connectNetwork() {
      throw new Error('Network is not connected!');
    }
  }

  class UserService {
    constructor(private client: HttpClient) {}
    login() {
      this.client.connectNetwork();
    }
  }

  class App {
    constructor(private service: UserService) {}

    run() {
      try {
        this.service.login();
      } catch (error) {
        // show dialog about user network connection
        console.log('catched error');
      }
    }
  }

  const httpClient = new HttpClient();
  const service = new UserService(httpClient);
  const app = new App(service);
  app.run();
}
