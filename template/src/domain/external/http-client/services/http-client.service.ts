import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {}

  public request(config: AxiosRequestConfig): Observable<AxiosResponse> {
    return this.httpService.request(config);
  }
}
