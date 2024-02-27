import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Event Tracker API')
  .setVersion('1.0')
  .addServer('http://localhost:3000/', 'Local Development')
  .build();
