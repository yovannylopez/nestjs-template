import { Module } from '@nestjs/common';

import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HealthModule, UsersModule],
})
export class DomainModule {}
