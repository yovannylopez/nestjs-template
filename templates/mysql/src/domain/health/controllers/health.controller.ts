import { Controller, Get, HttpStatus, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { HEALTH_PATH, VERSION_PATH } from 'src/common/constants/path.constants';

import { HealthService } from '../services/health.service';

@ApiTags('Microservice status')
@Controller()
export class HealthController {
  constructor(private readonly healthsService: HealthService) {}

  @ApiOperation({ summary: 'Health check service' })
  @ApiResponse({
    description: 'Return status OK',
    status: HttpStatus.OK,
  })
  @Get(HEALTH_PATH)
  getStatus(): object {
    Logger.log(`GET ${HEALTH_PATH} status OK`);
    return this.healthsService.getStatus();
  }

  @ApiOperation({ summary: 'Version service' })
  @ApiResponse({
    description: 'Return version',
    status: HttpStatus.OK,
  })
  @Get(VERSION_PATH)
  getVersion(): object {
    Logger.log(`GET ${VERSION_PATH} success`);
    return this.healthsService.getVersion();
  }
}
