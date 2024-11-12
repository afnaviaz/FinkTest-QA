import { CallAnApi } from '../abilities/CallAnApi';

export class SendUserRequest {
  static with(data: any) {
    return new SendUserRequest(data);
  }

  constructor(private data: any) {}

  performAs(actor: any) {
    const api = actor.abilityTo(CallAnApi);
    return api.post('/v2/user_request/create', this.data, {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.42.0',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive'
    });
  }
}