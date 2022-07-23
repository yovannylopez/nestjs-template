import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import * as request from 'supertest';

import { HEALTH_PATH, VERSION_PATH } from 'src/common/constants/path.constants';
import packageJson from 'src/common/helpers/package-json.helper';

import { HealthController } from 'src/domain/health/controllers/health.controller';
import { HealthService } from 'src/domain/health/services/health.service';

import { AppModule } from 'src/app.module';

describe('Health check suite test 🧪', () => {
  let app: INestApplication;
  let controller: HealthController;
  const status = {
    status: 'OK',
  };
  const version = {
    description: packageJson.description,
    name: packageJson.name,
    version: packageJson.version,
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      imports: [AppModule],
      providers: [HealthService],
    }).compile();

    app = moduleFixture.createNestApplication();
    controller = moduleFixture.get<HealthController>(HealthController);

    await app.init();
  });

  test('HealthController should be defined ✅', () => {
    expect(controller).toBeDefined();
  });

  test(`GET ${HEALTH_PATH} should be return a 200 status ✅`, async () =>
    await request(app.getHttpServer()).get(HEALTH_PATH).expect(HttpStatus.OK));

  test(`GET ${HEALTH_PATH} should be return status OK ✅`, async () =>
    await request(app.getHttpServer()).get(HEALTH_PATH).expect(status));

  test(`GET ${VERSION_PATH} should be return a 200 status ✅`, async () =>
    await request(app.getHttpServer()).get(VERSION_PATH).expect(HttpStatus.OK));

  test(`GET ${VERSION_PATH} should be return version info ✅`, async () =>
    await request(app.getHttpServer()).get(VERSION_PATH).expect(version));
});
