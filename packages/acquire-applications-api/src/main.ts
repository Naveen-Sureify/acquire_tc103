/**
 * Entrypoint
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import session from 'express-session';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1/nova';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  if (process.env.WITH_API_DOC_SERVER !== 'false')
    startDocumentationServer(app);

  app.use(
    session({
      secret:
        process.env.ACQUIRE_APPLICATIONS_API_SESSION_SECRET || 'my-secret',
      resave: false,
      saveUninitialized: false,
    })
  );

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  if (process.env.WITH_API_DOC_SERVER !== 'false')
    Logger.log(`🚀 Documentation is running on: http://localhost:${port}/docs`);
}

function startDocumentationServer(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('Acquire Applications API')
    .setDescription('Acquire Applications API endpoints documentation.')
    .setVersion('1.0')
    .addTag('acquire')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  return document;
}

bootstrap();










