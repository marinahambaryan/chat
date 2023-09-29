import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { configProps } from '../config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
    },
  });
  const PORT = configProps.PORT;
  await app.listen(PORT);
  Logger.log(`~ Application is running on: ${await app.getUrl()}`);
}
bootstrap();
