import { registerAs } from '@nestjs/config';

export default registerAs('', async () => ({
  NODE_ENV: String(process.env.NODE_ENV),
  NODE_PORT: Number(process.env.NODE_PORT),
  DEFAULT_LIMIT: Number(process.env.DEFAULT_LIMIT),
  DEFAULT_OFFSET: Number(process.env.DEFAULT_OFFSET),
  MONGODB_URL:String(process.env.MONGODB_URL),
}));
