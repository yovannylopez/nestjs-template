import { Injectable, NestMiddleware } from '@nestjs/common';

import { middleware } from 'express-http-context';

@Injectable()
export class HttpContextMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    middleware(req, res, next);
  }
}
