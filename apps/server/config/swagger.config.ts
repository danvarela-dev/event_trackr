import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Event Tracker API')
  .setVersion('1.0')
  .addServer(
    'http://http://vps-96efac4c.vps.ovh.ca/:3000/',
    'Local Development',
  )
  .build();
