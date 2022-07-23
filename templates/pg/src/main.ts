import 'dotenv/config';

import bootstrap from './infrastructure/application';
import packageJson from './common/helpers/package-json.helper';
import { AppModule } from './app.module';

bootstrap({ AppModule, packageJson });
