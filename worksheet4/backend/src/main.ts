import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log(`PORT from .env: ${process.env.PORT}`);
  const app = await NestFactory.create(AppModule);
  // enable cors
  app.enableCors({ origin: true, credentials: true });
  const PORT = process.env.PORT || 8082;
  await app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
  );
}
bootstrap();
