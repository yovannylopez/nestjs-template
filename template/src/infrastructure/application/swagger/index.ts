import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as fs from 'fs';

const { NODE_ENV } = process.env;

export default (app: INestApplication, packageJson: any) => {
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  if (NODE_ENV === 'local')
    fs.writeFileSync('docs/swagger.json', JSON.stringify(document));
  SwaggerModule.setup('api', app, document);
};
