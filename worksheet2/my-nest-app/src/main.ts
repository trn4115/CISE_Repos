import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log(`PORT from .env: ${process.env.PORT}`);
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  await app.listen(PORT);
  console.log(`Server is running on http://localhost:${PORT}`);
}
bootstrap();
