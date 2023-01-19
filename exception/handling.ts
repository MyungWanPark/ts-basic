{
  type FailureState = {
    result: 'failure';
    reason: 'Network' | 'Offline' | 'InternalServer';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | FailureState;

  class HttpClient {
    connectNetwork() {
      throw new Error('connection error');
    }
  }

  class UserService {
    constructor(private client: HttpClient) {}
    login(): ResultState {
      try {
        this.client.connectNetwork();
        return {
          result: 'success',
        };
      } catch (error) {
        return {
          result: 'failure',
          reason: 'InternalServer',
        };
      }
    }
  }

  class App {
    constructor(private service: UserService) {}

    run() {
      const resultData = this.service.login();
      if (resultData.result === 'success') {
        console.log('로그인 성공입니다.');
      } else {
        console.log(`${resultData.reason} 에러 입니다.`);
      }
    }
  }

  const httpClient = new HttpClient();
  const service = new UserService(httpClient);
  const app = new App(service);
  app.run();
}
