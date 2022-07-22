import { ConfigModule, ConfigService } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import * as Joi from 'joi';

import { HttpContextMiddleware } from './common/middlewares/http-context.middleware';
import { DomainModule } from './domain/domain.module';

import config from './infrastructure/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      envFilePath: config[process.env.NODE_ENV],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('local', 'production').default('local'),
        PORT: Joi.number().default(3000),
      }),
    }),
    DomainModule,
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule implements NestModule {
  static PORT: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.PORT = this.configService.get<number>('NODE_PORT');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpContextMiddleware).forRoutes('*');
  }
}
