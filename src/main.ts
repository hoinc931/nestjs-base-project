/* eslint-disable max-len */
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { ValidationErrorException } from './helpers/exceptions/validation-error.exception';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get<ConfigService>(ConfigService);

  const PORT: number = config.get<number>('PORT');
  const APP_ENV: string = config.get<string>('NODE_ENV');

  if (APP_ENV === 'production') {
    app.enable('trust proxy');
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new ValidationErrorException(errors);
      },
    }),
  );

  // limit data transfer
  app.use(json({ limit: '20mb' }));
  app.use(urlencoded({ extended: true, limit: '20mb' }));

  // http or https
  app.enableCors({
    origin:
      /^(http:\/\/localhost|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(:([0-9]|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|[1-5][0-9]{4}|6([0-4][0-9]{3}|5([0-4][0-9]{2}|5([0-2][0-9]|3[0-5])))))?$/i,
  });

  await app.listen(PORT, () => {
    console.log('App running with environment: ', APP_ENV);
    console.log('Nest app running at port: ', PORT);
  });
}
bootstrap();
