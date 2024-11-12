// abilities/CallAnApi.ts
import axios, { AxiosInstance } from 'axios';

export class CallAnApi {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }

  static at(baseURL: string) {
    return new CallAnApi(baseURL);
  }

  post(endpoint: string, data: any, headers: any) {
    return this.axiosInstance.post(endpoint, data, { headers });
  }
}