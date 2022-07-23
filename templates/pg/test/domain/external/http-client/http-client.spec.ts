import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { HttpClientService } from 'src/domain/external/http-client/services/http-client.service';

describe('httpClient Service suite test 🧪', () => {
  let httpClientService: HttpClientService;

  beforeEach(async () => {
    const httpServiceAxios = {
      provide: HttpService,
      useFactory: () => ({
        request: jest.fn(() => {
          return new Observable<AxiosResponse>();
        }),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpClientService, httpServiceAxios],
    }).compile();

    httpClientService = module.get<HttpClientService>(HttpClientService);
  });

  test('should be defined ✅', () => expect(httpClientService).toBeDefined());

  describe('request 🧪', () => {
    test('should be defined ✅', () =>
      expect(httpClientService.request).toBeDefined());
  });
});
