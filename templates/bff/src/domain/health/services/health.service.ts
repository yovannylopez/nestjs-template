import { Injectable } from '@nestjs/common';

import packageJson from 'src/common/helpers/package-json.helper';

@Injectable()
export class HealthService {
  status = {
    status: 'OK',
  };
  version = {
    description: packageJson.description,
    name: packageJson.name,
    version: packageJson.version,
  };

  getStatus = (): object => this.status;
  getVersion = (): object => this.version;
}
