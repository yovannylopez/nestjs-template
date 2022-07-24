import * as compression from 'compression';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

export default (app: any, packageJson: any) => {
  const modifyUserAgent = (request: any, _response: any, next: any) => {
    request.headers[
      'user-agent'
    ] = `${packageJson.name} / ${packageJson.version}`;
    next();
  };

  app.enableCors();
  app.use(compression());
  app.use(helmet());
  app.use(json({ limit: '10mb' }));
  app.use(modifyUserAgent);
  app.use(urlencoded({ limit: '10mb', extended: true }));
};
