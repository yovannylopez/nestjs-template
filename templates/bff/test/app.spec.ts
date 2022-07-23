import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import * as request from 'supertest';

import { AppModule } from 'src/app.module';
import { appRootError } from './mocks/app-root.mock';

describe('app root suite test 🧪', () => {
  let app: INestApplication;
  const WRONG_PATH = '/wrong';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test(`GET ${WRONG_PATH} should be return a 404 status 🔥`, async () =>
    await request(app.getHttpServer())
      .get(WRONG_PATH)
      .expect(HttpStatus.NOT_FOUND));

  test(`/ should be return a 404 status 🔥`, async () =>
    await request(app.getHttpServer())
      .get('/')
      .expect(HttpStatus.NOT_FOUND)
      .expect(appRootError));
});
