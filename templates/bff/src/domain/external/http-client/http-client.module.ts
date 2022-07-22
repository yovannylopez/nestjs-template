import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { HttpClientService } from './services/http-client.service';

@Module({
  exports: [HttpClientService],
  imports: [HttpModule],
  providers: [HttpClientService],
})
export class HttpClientModule {}
