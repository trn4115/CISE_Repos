import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables
    MongooseModule.forRoot(process.env.DB_URI),
  ], // Uses the DB_URI from .env file
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
