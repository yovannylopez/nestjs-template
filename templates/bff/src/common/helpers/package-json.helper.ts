import { join, resolve } from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require(join(resolve('./'), 'package.json'));

export default packageJson;
