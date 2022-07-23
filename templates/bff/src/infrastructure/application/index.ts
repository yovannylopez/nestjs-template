import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import middlewares from './middlewares';
import globalPipe from './pipes';
import swagger from './swagger';

export default async ({ AppModule, packageJson }) => {
  const app = await NestFactory.create(AppModule);
  // Global prefix
  app.setGlobalPrefix('api/');

  // Global pipes
  globalPipe(app);

  // Swagger config
  swagger(app, packageJson);

  // Middlewares
  middlewares(app, packageJson);

  // Server listen
  const PORT = AppModule.PORT;
  await app.listen(PORT, () => {
    Logger.log(`${packageJson.name} is running on port ${PORT}`);
  });
};
