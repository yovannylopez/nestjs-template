import { registerAs } from '@nestjs/config';

export default registerAs('', async () => ({
  NODE_ENV: String(process.env.NODE_ENV),
  NODE_PORT: Number(process.env.NODE_PORT),
}));
