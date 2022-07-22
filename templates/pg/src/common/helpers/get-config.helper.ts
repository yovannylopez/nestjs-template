import { join, resolve } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = (nodeEnv: string) =>
  require(join(resolve('./'), 'config', `${nodeEnv}.json`));

export default config;
