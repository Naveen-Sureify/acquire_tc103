import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AcquireDataModels,
  AcquireDataSource,
} from '@sureifylabs/acquire-models';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApplicationsController } from '../applications/applications.controller';
import { ApplicationsService } from '../applications/applications.service';
import { PayloadsController } from '../payloads/payloads.controller';
import { PayloadsService } from '../payloads/payloads.service';
import { HealthcheckController } from '../healthcheck/healthcheck.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(AcquireDataSource.options),
    ...Object.entries(AcquireDataModels)
      .filter(([k, _]) => !k.match(/Dto/))
      .map(([_, v]) => v)
      .map((model) => TypeOrmModule.forFeature([model])),
  ],
  controllers: [
    AppController,
    ApplicationsController,
    PayloadsController,
    HealthcheckController,
  ],
  providers: [AppService, ApplicationsService, PayloadsService],
})
export class AppModule {}
