import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as models from '@sureifylabs/acquire-models';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApplicationsController } from '../applications/applications.controller';
import { ApplicationsService } from '../applications/applications.service';
import { PayloadsController } from '../payloads/payloads.controller';
import { PayloadsService } from '../payloads/payloads.service';
import { HealthcheckController } from '../healthcheck/healthcheck.controller';
import { AcquireDataSource } from '@sureifylabs/data-source';
import { QuotesService } from '../applications/quotes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(AcquireDataSource.options),
    ...Object.entries(models)
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
  providers: [AppService, ApplicationsService, PayloadsService, QuotesService],
})
export class AppModule {}
