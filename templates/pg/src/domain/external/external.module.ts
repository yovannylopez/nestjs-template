import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { HttpClientModule } from './http-client/http-client.module';

const SERVICES = [ConfigService];

@Module({
  exports: SERVICES,
  imports: [HttpClientModule],
  providers: [...SERVICES],
})
export class ExternalModule {}
