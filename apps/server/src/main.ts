import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from '../config/swagger.config';
import { ResponseInterceptor } from './app/interceptors/response-interceptor.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      allowedHeaders: 'Content-Type, Accept',
      credentials: false,
    },
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalInterceptors(new ResponseInterceptor());
  const port = process.env.PORT || 3000;
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
