import { registerAs } from '@nestjs/config';

export default registerAs('', async () => ({
  NODE_ENV: String(process.env.NODE_ENV),
  NODE_PORT: Number(process.env.NODE_PORT),
  // Database
  DB_TYPE: String(process.env.DB_TYPE),
  DB_HOST: String(process.env.DB_HOST),
  DB_PORT: Number(process.env.DB_PORT),
  DB_USERNAME: String(process.env.DB_USERNAME),
  DB_PASSWORD: String(process.env.DB_PASSWORD),
  DB_NAME: String(process.env.DB_NAME),
  DB_SYNCHRONIZE: Boolean(process.env.DB_SYNCHRONIZE),
  DB_AUTOLOAD: Boolean(process.env.DB_AUTOLOAD),
}));
